using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace Selenium
{
	[TestFixture]
	public class SeleniumTest
	{
		private IWebDriver _webDriver;
		private IJavaScriptExecutor _javaScriptExecutor;
		private const string Email = "16fi.n.trembitskyi@std.npu.edu.ua";
		private const string Password = "Ronaldo99";

		[SetUp]
		public void Setup()
		{
			_webDriver = new ChromeDriver();
			_webDriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(2);
			_webDriver.Manage().Timeouts().PageLoad = TimeSpan.FromSeconds(10);
			_javaScriptExecutor = (IJavaScriptExecutor)_webDriver;
		}

		[TearDown]
		public void Dispose()
		{
			_webDriver.Quit();
			_webDriver.Dispose();
		}

		[Test]
		public void TestGoogle()
		{
			_webDriver.Navigate().GoToUrl(Urls.Google);
			Assert.AreEqual(Urls.Google, _webDriver.Url);
			Assert.AreEqual("Google", _webDriver.Title);

			var logo = _webDriver.FindElements(By.CssSelector("#hplogo")).FirstOrDefault();

			Assert.NotNull(logo);

			var searchField = _webDriver.FindElements(By.CssSelector("input[name = 'q']")).FirstOrDefault();

			Assert.NotNull(searchField);

			var buttonSearch = _webDriver.FindElements(By.CssSelector("input[name = 'btnK']")).FirstOrDefault();

			Assert.NotNull(buttonSearch);

			var gmailLink = _webDriver.FindElements(By.CssSelector("a[href ^= 'https://mail.google.com/']")).FirstOrDefault();

			Assert.NotNull(gmailLink);
		}

		[Test]
		public void TestWikipedia()
		{
			_webDriver.Navigate().GoToUrl(Urls.Wikipedia);
			StringAssert.Contains(Urls.Wikipedia, _webDriver.Url);

			var searchField = _webDriver.FindElements(By.Id("searchInput")).FirstOrDefault();

			Assert.NotNull(searchField);

			searchField.SendKeys("Київ");

			Thread.Sleep(1000);

			searchField.SendKeys(Keys.Enter);

			var emplemKyiv = _webDriver.FindElements(By.CssSelector("img[alt ^= 'COA of Kyiv']")).FirstOrDefault();

			Assert.NotNull(emplemKyiv);

			_webDriver.Manage().Timeouts().ImplicitWait = TimeSpan.Zero;

			var countOfPopulation = _webDriver.FindElements(By.CssSelector(".infobox tr"))
				.FirstOrDefault(i => i.FindElements(By.CssSelector("a[title = 'Населення']")).Any())?
				.FindElements(By.TagName("td")).FirstOrDefault();

			Assert.NotNull(countOfPopulation);

			var densityOfPopulation = _webDriver.FindElements(By.CssSelector(".infobox tr"))
				.FirstOrDefault(i => i.FindElements(By.CssSelector("a[title = 'Густота населення']")).Any())?
				.FindElements(By.TagName("td")).FirstOrDefault();

			var text = densityOfPopulation?.Text;

			Assert.NotNull(densityOfPopulation);

			var averageTemperature = _webDriver.FindElements(By.CssSelector("#collapsibleTable0 tr:nth-child(5) th:nth-child(5)")).FirstOrDefault();

			Assert.NotNull(averageTemperature);

			var ul = _webDriver.FindElements(By.CssSelector("ul"))
				.FirstOrDefault(i => i.FindElements(By.CssSelector("li a[title ^= 'Золоті ворота']")).Any());

			var count = ul?.FindElements(By.TagName("li")).Count;

			Assert.Greater(count, 20);
		}

		[Test]
		public void Authorization()
		{
			_webDriver.Navigate().GoToUrl(Urls.AutomationPractice);

			StringAssert.AreEqualIgnoringCase("My Store", _webDriver.Title);

			var signInButton = _webDriver.FindElements(By.ClassName("login")).FirstOrDefault();
			Assert.NotNull(signInButton);
			signInButton.Click();

			StringAssert.AreEqualIgnoringCase("Login - My Store", _webDriver.Title);

			var emailField = _webDriver.FindElements(By.Id("email")).FirstOrDefault();
			Assert.NotNull(emailField);
			emailField.SendKeys(Email);

			var passwordField = _webDriver.FindElements(By.Id("passwd")).FirstOrDefault();
			Assert.NotNull(passwordField);
			passwordField.SendKeys(Password);

			var submitLoginBtn = _webDriver.FindElements(By.Id("SubmitLogin")).FirstOrDefault();
			Assert.NotNull(submitLoginBtn);
			submitLoginBtn.Click();

			StringAssert.AreEqualIgnoringCase("My account - My Store", _webDriver.Title);

			var account = _webDriver.FindElements(By.ClassName("account")).FirstOrDefault();
			Assert.NotNull(account);

			StringAssert.AreEqualIgnoringCase($"Nikita Trembitkyi", account.Text);
		}

		[Test]
		public void AuthorizationWithEmptyEmail()
		{
			_webDriver.Navigate().GoToUrl(Urls.AutomationPractice);

			StringAssert.AreEqualIgnoringCase("My Store", _webDriver.Title);

			var signInButton = _webDriver.FindElements(By.ClassName("login")).FirstOrDefault();
			Assert.NotNull(signInButton);
			signInButton.Click();

			StringAssert.AreEqualIgnoringCase("Login - My Store", _webDriver.Title);

			var submitLoginBtn = _webDriver.FindElements(By.Id("SubmitLogin")).FirstOrDefault();
			Assert.NotNull(submitLoginBtn);
			submitLoginBtn.Click();

			var alerts = _webDriver.FindElements(By.ClassName("alert"));
			var errors = alerts.SelectMany(a => a.FindElements(By.TagName("li")).Select(li => li.Text));

			Assert.True(errors.Contains("An email address required."));
		}

		[Test]
		public void AuthorizationWithEmptyPassword()
		{
			_webDriver.Navigate().GoToUrl(Urls.AutomationPractice);

			StringAssert.AreEqualIgnoringCase("My Store", _webDriver.Title);

			var signInButton = _webDriver.FindElements(By.ClassName("login")).FirstOrDefault();
			Assert.NotNull(signInButton);
			signInButton.Click();

			StringAssert.AreEqualIgnoringCase("Login - My Store", _webDriver.Title);

			var emailField = _webDriver.FindElements(By.Id("email")).FirstOrDefault();
			Assert.NotNull(emailField);
			emailField.SendKeys(Email);

			var submitLoginBtn = _webDriver.FindElements(By.Id("SubmitLogin")).FirstOrDefault();
			Assert.NotNull(submitLoginBtn);
			submitLoginBtn.Click();

			var alerts = _webDriver.FindElements(By.ClassName("alert"));
			var errors = alerts.SelectMany(a => a.FindElements(By.TagName("li")).Select(li => li.Text));

			Assert.True(errors.Contains("Password is required."));
		}

		[Test]
        public void FirstScenario()
        {
            Authorization();
			
            var shirts = _webDriver.FindElements(By.CssSelector("#block_top_menu > ul > li > a[title='T-shirts']")).FirstOrDefault();
            Assert.NotNull(shirts);
            shirts.Click();
			
            var product = _webDriver.FindElements(By.CssSelector(".right-block a[title='Faded Short Sleeve T-shirts']")).FirstOrDefault();
            Assert.NotNull(product);
            product.Click();
			
            var addToCard = _webDriver.FindElements(By.CssSelector("button[name='Submit']")).FirstOrDefault();
            Assert.NotNull(addToCard);
            addToCard.Click();

            var closeModel = _webDriver.FindElements(By.ClassName("cross")).FirstOrDefault();
            Assert.NotNull(closeModel);
            closeModel.Click();
			
            var card = _webDriver.FindElements(By.CssSelector("a[title='View my shopping cart']")).FirstOrDefault();
            Assert.NotNull(card);
            card.Click();
			
            var productName =_webDriver.FindElements(By.CssSelector(".cart_item .product-name")).FirstOrDefault()?.Text;
            Assert.NotNull(productName);
            StringAssert.AreEqualIgnoringCase("Faded Short Sleeve T-shirts", productName);

			
            var totalPrice =_webDriver.FindElements(By.Id("total_product")).FirstOrDefault()?.Text;
            Assert.NotNull(totalPrice);
            StringAssert.AreEqualIgnoringCase("$16.51", totalPrice);

			
            var plus = _webDriver.FindElements(By.ClassName("cart_quantity_up")).FirstOrDefault();
            Assert.NotNull(plus);
            plus.Click();
			
			Thread.Sleep(2000);

            var totalPriceAfterClickPlus = _webDriver.FindElements(By.Id("total_product")).FirstOrDefault()?.Text;
            Assert.NotNull(totalPriceAfterClickPlus);

            var number = totalPrice.Replace("$", string.Empty).Replace('.', ',');
            var newTotalPrice = double.Parse(number) * 2;
            StringAssert.AreEqualIgnoringCase($"${newTotalPrice}", totalPriceAfterClickPlus.Replace('.', ','));
        }

		[Test]
        public void SearchProduct()
        {
            Authorization();

            var searchKey = "Printed Chiffon Dress";
			
            var searchInput = _webDriver.FindElements(By.Id("search_query_top")).FirstOrDefault();
            Assert.NotNull(searchInput);
            searchInput.SendKeys(searchKey);
            searchInput.SendKeys(Keys.Return);

            Thread.Sleep(2000);
			
            var products = _webDriver.FindElements(By.ClassName("product-container"));
            var productSearch = products
                .FirstOrDefault(p => p.FindElements(By.CssSelector(".right-block .product-name")).FirstOrDefault()?.Text == searchKey);
            Assert.NotNull(productSearch);

            var percent = productSearch.FindElements(By.CssSelector(".right-block .price-percent-reduction")).FirstOrDefault()?.Text;
            Assert.NotNull(percent);
            StringAssert.AreEqualIgnoringCase("-20%", percent);
        }
	}
}
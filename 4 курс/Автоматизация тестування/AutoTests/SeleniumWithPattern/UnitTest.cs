using NUnit.Framework;
using SeleniumWithPattern.Factory;
using SeleniumWithPattern.PageObjects.MyStore;
using SeleniumWithPattern.PageObjects.MyStore.Modals;
using SeleniumWithPattern.PageObjects.MyStore.Product;
using SeleniumWithPattern.Utils;
using System.Linq;
using System.Threading;

namespace SeleniumWithPattern
{
	public class Tests
	{
		private const string Email = "16fi.n.trembitskyi@std.npu.edu.ua";
		private const string Password = "Ronaldo99";

		[SetUp]
		public void Setup()
		{
			Browser.InitWebDriver();
		}

		[TearDown]
        public void Cleanup()
        {
            Browser.Dispose();
        }


		private void Authorization()
        {
            Browser.WebDriver.Navigate().GoToUrl("http://automationpractice.com");

            StringAssert.AreEqualIgnoringCase("My Store", Browser.WebDriver.Title);

            var mainPage = PageFactory.Create<MainPage>();

            mainPage.SignIn.Click();

            Thread.Sleep(1000);

            var loginPage = PageFactory.Create<LoginMyStore>();

            Assert.NotNull(loginPage.Email);
            loginPage.Email.SendKeys(Email);

            Assert.NotNull(loginPage.Password);
            loginPage.Password.SendKeys(Password);

            Assert.NotNull(loginPage.SubmitLogin);
            loginPage.SubmitLogin.Click();

            Thread.Sleep(2000);

            StringAssert.AreEqualIgnoringCase("My account - My Store", Browser.WebDriver.Title);
        }

		[Test]
		public void FirstScenario()
		{
			Authorization();

            var mainPage = PageFactory.Create<MainPage>();

            mainPage.GoToWomenSection.Click();

            var womenSectionPage = PageFactory.Create<WomenSection>();

            Assert.AreEqual(7, womenSectionPage.Products.Count());

            var yellowProducts = womenSectionPage.Products
                .Where(product => product.Colors.Any(color => color.ColorName == "yellow")).ToList();

            Assert.AreEqual(3, yellowProducts.Count);

            womenSectionPage.ViewList.Click();

            Thread.Sleep(1000);

            Assert.True(womenSectionPage.Products.All(product => !string.IsNullOrEmpty(product.Description)));
		}

        [Test]
        public void SecondScenario()
        {
            Authorization();

            var mainPage = PageFactory.Create<MainPage>();

            mainPage.GoToWomenSection.Click();

            var womenSectionPage = PageFactory.Create<WomenSection>();

            var product = womenSectionPage.Products
                .FirstOrDefault(_ => _.Name == "Faded Short Sleeve T-shirts");

            product.Open();

            var productPage = PageFactory.Create<Product>();

            productPage.SendToFriend.Click();

            var sendToFriend = PageFactory.Create<SendToFriendModal>();

            StringAssert.StartsWith("Name of your friend", sendToFriend.NameFriendLable);

            Assert.NotNull(sendToFriend.Send);
        }

        [Test]
        public void ThirdScenario()
        {
            Authorization();

            var mainPage = PageFactory.Create<MainPage>();

            mainPage.GoToWomenSection.Click();

            var womenSectionPage = PageFactory.Create<WomenSection>();

            var product = womenSectionPage.Products
                .FirstOrDefault(_ => _.Name == "Faded Short Sleeve T-shirts");

            product.Open();

            var productPage = PageFactory.Create<Product>();

            productPage.AddToCard.Click();

            Thread.Sleep(2000);

            PageFactory.Create<AddToShoppingCardModal>().Close.Click();

            productPage.OpenCard.Click();

            Thread.Sleep(2000);

            var orderPage = PageFactory.Create<Order>();

            Assert.True(orderPage.Products.All(_ => !string.IsNullOrEmpty(_.PhotoUrl)));

            Assert.NotNull(orderPage.Footer.Email);
            Assert.NotNull(orderPage.Footer.Phone);
        }
	}
}
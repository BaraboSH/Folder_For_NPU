using OpenQA.Selenium;
using SeleniumWithPattern.PageObjects;
using SeleniumWithPattern.Utils;

namespace SeleniumWithPattern.Factory
{
	public static class PageFactory
	{
		public static TPage Create<TPage>(IWebDriver driver = null) where TPage:PageBase, new()
		{
			return new TPage
			{
				Driver = driver ?? Browser.WebDriver
			};
		}
	}
}

using SeleniumWithPattern.Utils;

namespace SeleniumWithPattern.PageObjects.MyStore.Product
{
	public class ProductFromOrder : PageBase
	{
		public string PhotoUrl => RelatedElement.FindElement(".cart_product img")?.GetProperty("src");
	}
}

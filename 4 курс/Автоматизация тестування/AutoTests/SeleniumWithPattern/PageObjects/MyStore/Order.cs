using SeleniumWithPattern.PageObjects.MyStore.Product;
using SeleniumWithPattern.Utils;
using System.Collections.Generic;

namespace SeleniumWithPattern.PageObjects.MyStore
{
	public class Order : PageBase
	{
		public IReadOnlyCollection<ProductFromOrder> Products =>
			SelectAll<ProductFromOrder>("cart_item", FindBy.ClassName);

		public Footer Footer =>
			Select<Footer>("footer-container", FindBy.ClassName);
	}
}

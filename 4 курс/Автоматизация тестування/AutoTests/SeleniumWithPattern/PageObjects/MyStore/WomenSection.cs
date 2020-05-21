using SeleniumWithPattern.Components;
using SeleniumWithPattern.PageObjects.MyStore.Product;
using SeleniumWithPattern.Utils;
using System.Collections.Generic;

namespace SeleniumWithPattern.PageObjects.MyStore
{
	public class WomenSection:PageBase
	{
		public Button ViewList => Select<Button>("a[title='List']");

		public IReadOnlyCollection<ProductModel> Products =>
			SelectAll<ProductModel>("product-container", FindBy.ClassName);
	}
}

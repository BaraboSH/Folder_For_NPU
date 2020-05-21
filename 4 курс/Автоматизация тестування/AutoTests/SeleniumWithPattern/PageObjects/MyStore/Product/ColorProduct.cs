namespace SeleniumWithPattern.PageObjects.MyStore.Product
{
	public class ColorProduct : PageBase
	{
		public string ColorName
		{
			get
			{
				var href = RelatedElement.GetProperty("href");
				var color = href.Substring(href.LastIndexOf("-") + 1);

				return color;
			}
		}
	}
}

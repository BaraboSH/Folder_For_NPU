using SeleniumWithPattern.PageObjects;

namespace SeleniumWithPattern.Components
{
	public class Button : PageBase
	{
		public string Label => RelatedElement.Text;

		public void Click() => RelatedElement.Click();
	}
}

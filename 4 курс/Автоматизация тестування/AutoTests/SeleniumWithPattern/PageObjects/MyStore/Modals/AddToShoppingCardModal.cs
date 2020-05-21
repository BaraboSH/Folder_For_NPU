using SeleniumWithPattern.Components;
using SeleniumWithPattern.Utils;

namespace SeleniumWithPattern.PageObjects.MyStore.Modals
{
	public class AddToShoppingCardModal : PageBase
	{
		public Button Close => Select<Button>("cross", FindBy.ClassName);
	}
}

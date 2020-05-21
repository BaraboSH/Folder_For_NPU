using SeleniumWithPattern.Components;
using SeleniumWithPattern.Utils;

namespace SeleniumWithPattern.PageObjects.MyStore
{
	public class MainPage:PageBase
	{
		public Button SignIn => Select<Button>("login", FindBy.ClassName);

		public Button GoToWomenSection => Select<Button>("#block_top_menu > ul > li > a[title='Women']");

		public Button OpenCard => Select<Button>("a[title='View my shopping cart']");
	}
}

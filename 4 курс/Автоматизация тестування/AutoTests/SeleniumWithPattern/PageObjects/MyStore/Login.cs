using SeleniumWithPattern.Components;
using SeleniumWithPattern.Utils;

namespace SeleniumWithPattern.PageObjects.MyStore
{
	public class LoginMyStore : PageBase
	{
		public Input Email => Select<Input>("email", FindBy.Id);

		public Input Password => Select<Input>("passwd", FindBy.Id);

		public Button SubmitLogin => Select<Button>("SubmitLogin", FindBy.Id);
	}
}

using SeleniumWithPattern.Components;
using SeleniumWithPattern.Utils;

namespace SeleniumWithPattern.PageObjects.MyStore.Modals
{
	public class SendToFriendModal : PageBase
	{
		public string NameFriendLable => RelatedElement.FindElement("label[for='friend_name']")?.Text;

		public Button Send => Select<Button>("sendEmail", FindBy.Id);
	}
}

using SeleniumWithPattern.Utils;
using System.Linq;

namespace SeleniumWithPattern.PageObjects.MyStore
{
	public class Footer : PageBase
	{
		public string Phone
		{
			get
			{
				var liList = RelatedElement.FindElements("li", FindBy.TagName);
				var li = liList.FirstOrDefault(li => li.FindElements("icon-phone", FindBy.ClassName).Any());
				var phone = li?.FindElement("span", FindBy.TagName)?.Text;
				return phone;
			}
		}

		public string Email
		{
			get
			{
				var liList = RelatedElement.FindElements("li", FindBy.TagName);
				var li = liList.FirstOrDefault(li => li.FindElements("icon-envelope-alt", FindBy.ClassName).Any());
				var email = li?.FindElement("span", FindBy.TagName)?.Text;
				return email;
			}
		}
	}
}

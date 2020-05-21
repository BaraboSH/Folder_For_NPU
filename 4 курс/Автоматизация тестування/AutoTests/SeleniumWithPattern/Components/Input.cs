using SeleniumWithPattern.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeleniumWithPattern.Components
{
	public class Input:PageBase
	{
		public string Value => RelatedElement.Text;

		public void SendKeys(string value) => RelatedElement.SendKeys(value);
	}
}

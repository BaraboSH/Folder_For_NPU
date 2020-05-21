using SeleniumWithPattern.Components;
using SeleniumWithPattern.Utils;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeleniumWithPattern.PageObjects.MyStore.Product
{
	public class Product:PageBase
	{
		public Button SendToFriend => Select<Button>("send_friend_button", FindBy.Id);

		public Button OpenCard => Select<Button>("a[title='View my shopping cart']");

		public Button AddToCard => Select<Button>("button[name='Submit']");
	}
}

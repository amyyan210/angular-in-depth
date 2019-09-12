using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace WhataTests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {

            var url = "https://devwbdotcom.azurewebsites.net/home";
            var email = "amyyan210@gmail.com";
            var password = "Burger01!";

            IWebDriver driver = new ChromeDriver(@"/Users/ayanaway/Documents");
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            driver.Navigate().GoToUrl(url);

            IWebElement signIn = driver.FindElement(By.XPath("//*[text() = 'Sign In']"));
            signIn.Click();

            IWebElement emailInput = driver.FindElement(By.Id("username"));
            emailInput.SendKeys(email);
            IWebElement passwordInput = driver.FindElement(By.Id("password"));
            passwordInput.SendKeys(password);

            IWebElement submitButton = driver.FindElement(By.CssSelector("button[type=\"submit\"]"));
            submitButton.Click();

            IWebElement username = driver.FindElement(By.CssSelector("[ng-reflect-router-link=\"/account\"]"));
            username.Click();

            //WebDriverWait managePaymentWait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            //managePaymentWait.Until((d) =>
            //{
            //    IWebElement pay = driver.FindElement(By.CssSelector("[ng-reflect-router-link=\"/account/managepayment\"]"));
            //    return pay;
            //});

            IWebElement managePayment = driver.FindElement(By.CssSelector("[ng-reflect-router-link=\"/account/managepayment\"]"));
            managePayment.Click();

            IEnumerable<IWebElement> paymentMethods = driver.FindElements(By.CssSelector("[href=\"#paymentDetails\"]"));
            paymentMethods.First().Click();

            //if (!driver.FindElement(By.Id("setdefault")).GetProperty("checked")))
            //{

            //}

            driver.Quit();

        }
    }
}

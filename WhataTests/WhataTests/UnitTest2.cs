using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
namespace WhataTests
{


    [TestClass]
    public class UnitTest2
    {


        [TestMethod]
        public void TestMethod2()
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


            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.Until(visibilityOfElementLocated(By.CssSelector("[ng-reflect-router-link=\"/account\"]")));

            //IWebElement startOrder = driver.FindElement(By.XPath("//*[text() = 'START ORDERING']"));
            //startOrder.Click();


            //// was already commented out
            //WebDriverWait accountWait = new WebDriverWait(driver, TimeSpan.FromSeconds(30));
            //accountWait.Until((d) =>
            //{
            //    IWebElement username = driver.FindElement(By.CssSelector("span[class=\"user-name\"]"));
            //    //username.Click();
            //    //IWebElement pay = driver.FindElement(By.CssSelector("[ng-reflect-router-link=\"/account/managepayment\"]"));
            //    return username;
            //});



            //IWebElement managePayment = driver.FindElement(By.CssSelector("[ng-reflect-router-link=\"/account/managepayment\"]"));
            //managePayment.Click();

            //IEnumerable<IWebElement> paymentMethods = driver.FindElements(By.CssSelector("[href=\"#paymentDetails\"]"));
            //paymentMethods.First().Click();

            //if (!driver.FindElement(By.Id("setdefault")).GetProperty("checked")))
            //{

            //}

            driver.Quit();
        }

    }

}
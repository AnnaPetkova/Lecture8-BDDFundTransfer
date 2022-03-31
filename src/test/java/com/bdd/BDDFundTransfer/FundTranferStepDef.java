package com.bdd.BDDFundTransfer;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

public class FundTranferStepDef {

    private WebDriver driver;

    @Before
    public void setup(){
        System.setProperty("webdriver.chrome.driver", "/Users/milenbozhinov/Downloads/chromedriver");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    @Given("the user is on the Fund Transfer page")
    public void the_user_is_on_the_Fund_Transfer_page() {
        driver.get("http://pragmatic.bg/automation/lecture15/fundTransfer.html");
    }

    @When("the user enters {string} as payee name")
    public void the_user_enters_as_payee_name(String payeeName) {
        WebElement payee = driver.findElement(By.id("payee"));
        Select payeeNameDropdown = new Select(payee);
        payeeNameDropdown.selectByValue(payeeName);
    }

    @When("the user enters {string} as amount")
    public void the_user_enters_as_amount(String amount) {
        driver.findElement(By.id("amount")).sendKeys(amount);
    }

    @When("the user submit request for Fund transfer")
    public void the_user_submit_request_for_Fund_transfer() {
        driver.findElement(By.id("transfer")).click();
    }

    @Then("ensure the fund transfer is complete with {string} message")
    public void ensure_the_fund_transfer_is_complete_with_message(String expectedMessage) {
        WebElement actualMessage = driver.findElement(By.id("message"));
        Assert.assertEquals(actualMessage.getText(), expectedMessage);
    }

    @Then("ensure a transaction failure message {string} is displayed")
    public void ensure_a_transaction_failure_message_is_displayed(String expectedFailureMessage) {
        WebElement actualFailureMessage = driver.findElement(By.id("message"));
        Assert.assertEquals(actualFailureMessage.getText(), expectedFailureMessage);
    }
}

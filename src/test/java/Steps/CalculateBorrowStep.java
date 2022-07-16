package Steps;

import Base.BaseStep;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.UUID;

public class CalculateBorrowStep extends BaseStep {
    String uuid = UUID.randomUUID().toString();

    @Given("^user launches application$")
    public void userlaunchesapplication() {
        geturl();
    }

    @Given("^user clicks on single$")
    public void user_clicks_on_single() throws Throwable {
        findElementClick("//label[@for='application_type_single']",Pather.xPath);


    }

    @Given("^select \"([^\"]*)\" dependants$")
    public void select_dependants(String arg1) throws Throwable {
        WebElement ele= findElement("//select[@title='Number of dependants']",Pather.xPath,"");
        Select s= new Select(ele);
        s.selectByVisibleText(arg1);

    }

    @Given("^clicks on busying a home to live in$")
    public void clicks_on_busying_a_home_to_live_in() throws Throwable {
        findElementClick("//label[@for='borrow_type_home']",Pather.xPath);
    }

    @Given("^with income of \"([^\"]*)\" dollars$")
    public void with_income_of_dollars(String arg1) throws Throwable {
        findElement("q2q1i1",Pather.id,"").sendKeys(arg1);
    }

    @Given("^Other incomes \"([^\"]*)\" dollars$")
    public void other_incomes_dollars(String arg1) throws Throwable {
        findElement("other income",Pather.id,"").sendKeys(arg1);
    }

    @Given("^Living expenses \"([^\"]*)\" dollars$")
    public void living_expenses_dollars(String arg1) throws Throwable {
        findElement("living expese",Pather.id,"").sendKeys(arg1);
    }

    @Given("^other expenses \"([^\"]*)\"$")
    public void other_expenses(String arg1) throws Throwable {
        findElement("other",Pather.id,"").sendKeys(arg1);
    }

    @Given("^Other Loan Repayments \"([^\"]*)\" doallars$")
    public void other_Loan_Repayments_doallars(String arg1) throws Throwable {
        findElement("loan",Pather.id,"").sendKeys(arg1);
    }

    @Given("^Other commitments \"([^\"]*)\" dollars$")
    public void other_commitments_dollars(String arg1) throws Throwable {
        findElement("other",Pather.id,"").sendKeys(arg1);
    }

    @Given("^credit card limit \"([^\"]*)\" dollars$")
    public void credit_card_limit_dollars(String arg1) throws Throwable {
        findElement("credit",Pather.id,"").sendKeys(arg1);

    }

    @When("^he click on calculate borrow$")
    public void he_click_on_calculate_borrow() throws Throwable {
        findElementClick("q2q1i1",Pather.id);
    }

    @Then("^amount should be \"([^\"]*)\" dollars$")
    public void amount_should_be_dollars(String arg1) throws Throwable {
        findElement("q2q1i1",Pather.id,"").getText().equals(arg1);
    }




    @And("^driver close$")
    public void driverClose() {
        DriverQuit();
    }
}

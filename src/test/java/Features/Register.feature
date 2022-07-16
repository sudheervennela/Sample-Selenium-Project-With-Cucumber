Feature: Calculate borrow

 @demo
  Scenario: calcualting borrow for single user
    Given user launches application
    And user clicks on single
    And select "1" dependants
    And clicks on busying a home to live in
    And with income of "80000" dollars
    And Other incomes "10000" dollars
    And Living expenses "500" dollars
    And other expenses "0"
    And Other Loan Repayments "100" doallars
    And Other commitments "0" dollars
    And credit card limit "10000" dollars
    When he click on calculate borrow
    Then amount should be "479000" dollars

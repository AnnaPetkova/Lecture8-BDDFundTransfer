$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/fundtransfer.feature");
formatter.feature({
  "name": "Customer Transfer\u0027s Fund",
  "description": "  As a customer,\n  I want to transfer funds\n  so that I can send money to my friends and family",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Valid Payee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@JIRA-3322"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Fund Transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_is_on_the_Fund_Transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"Jim\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"100\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user submit request for Fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_submit_request_for_Fund_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure the fund transfer is complete with \"$100 transferred successfully to Jim!!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTranferStepDef.ensure_the_fund_transfer_is_complete_with_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "nov test case",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Fund Transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_is_on_the_Fund_Transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"Tim\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"10\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user submit request for Fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_submit_request_for_Fund_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure the fund transfer is complete with \"$10 transferred successfully to Tim!!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTranferStepDef.ensure_the_fund_transfer_is_complete_with_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Payee1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@JIRA-2342"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Fund Transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_is_on_the_Fund_Transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"John\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"100\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user submit request for Fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_submit_request_for_Fund_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a transaction failure message \"Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTranferStepDef.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Account is overdrawn past the overdraft limit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Fund Transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_is_on_the_Fund_Transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"Tim\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"1000000\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user submit request for Fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_submit_request_for_Fund_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a transaction failure message \"Transfer failed!! account cannot be overdrawn\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTranferStepDef.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "datadriven negative",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fundTransferTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "the user is on the Fund Transfer page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user enters \"\u003cpayeeName\u003e\" as payee name",
  "keyword": "When "
});
formatter.step({
  "name": "the user enters \"\u003camount\u003e\" as amount",
  "keyword": "And "
});
formatter.step({
  "name": "the user submit request for Fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "ensure the fund transfer is complete with \"\u003cexpectedMessage\u003e\" message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "payeeName",
        "amount",
        "expectedMessage"
      ]
    },
    {
      "cells": [
        "Jim",
        "100",
        "$100 transferred successfully to Jim!!"
      ]
    },
    {
      "cells": [
        "Tim",
        "10",
        "$10 transferred successfully to Tim!!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "datadriven negative",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fundTransferTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Fund Transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_is_on_the_Fund_Transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"Jim\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"100\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user submit request for Fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_submit_request_for_Fund_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure the fund transfer is complete with \"$100 transferred successfully to Jim!!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTranferStepDef.ensure_the_fund_transfer_is_complete_with_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "datadriven negative",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fundTransferTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Fund Transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_is_on_the_Fund_Transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"Tim\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"10\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user submit request for Fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTranferStepDef.the_user_submit_request_for_Fund_transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure the fund transfer is complete with \"$10 transferred successfully to Tim!!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTranferStepDef.ensure_the_fund_transfer_is_complete_with_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
'use strict';

// Introduction

/*

Imagine checking your bank account online. You have $1,000. The website is updated overnight, and 
you check again in the morning. Your balance is $257.43. Where did your money go? Is that truly 
your balance?

You report this to customer service. Thousands of other users report similar issues. Customers 
close accounts.

Back at the bank a software error is found to be the cause. The bank’s developers did not run tests 
on the software before deploying it to users. Money did not vanish but its amounts were printed 
incorrectly to the website.

Errors in software are inevitable. Unchecked, these errors can have painful and costly impacts on 
users and developers. In 2002, a study commissioned by the US Department of Commerce’s National 
Institute of Standards and Technology concluded that software errors cost the US economy about 
$59 billion annually.

To avoid those costs, software professionals use automated testing. During and after production, they 
can run an automated test suite to give themselves confidence that their products are free of errors 
and work as expected.

This lesson will give you the knowledge and practice to discuss these concepts. By the end of this 
lesson you will be able to:

Define an automated test suite

Describe how a test suite is used in software development

Explain the benefits of automated testing

*/

// Manual Testing

/*

Software testing is the process of assessing the completeness and quality of computer software. 
Usually this is done by running a part of a system (like a web application) and comparing the 
actual behavior to the expected behavior.

One way to perform software testing is manual testing. Manual testing is a form of testing done by 
a human interacting with a system. With web apps, this might be clicking, dragging, and typing 
through a webpage. A list of actions and expected behaviors would be given. If the observed 
behavior doesn’t match the expected behavior, the application has an error.

Errors, like the ones you may have found in the provided web app, are also called bugs. A bug is an 
error, fault, or flaw in software that makes a system behave in unexpected ways. As you read in the 
last exercise, these unexpected behaviors can cause harm to users. Ideally testing catches bugs 
before they are sent to users.

*/

// Automated Testing

/*


How long did it take to manually test the application in the previous exercise? If you repeated the 
process 100 times, how often do you think you would make a mistake?

In a company, someone must be paid to do that work, so every hour of manual testing has a cost. 
The cost of testing can be reduced and the quality can be improved with automated testing.

Automated testing is the use of software to control the execution of tests and the comparison of 
actual behavior to expected behavior. All the testing you just did (and more) could be performed 
by a computer program.

Compared to manual testing, automated testing is

Faster: it tests more of your product in less time.
More reliable: it’s less prone to error than a human is .
Maintainable: you can review, edit, and extend a collection of tests.
Rather than hire a testing team at the end of development, professional developers can run their 
automated tests after every change. The workflow might look like this:

Write code and corresponding tests

Enter a command into a terminal to run 

If the app behaves as intended, all tests should pass. Development is complete.

If it does not behave as intended, at least one test should fail. Fix code and return to step 2.



*/

// The Test Suite

/*

Tests are written with code, just like the rest of your web app. You can refer to the code defining 
your app as implementation code, and the code defining your tests as test code.

A collection of tests for a web application is called a test suite. In the last exercise, you ran a 
test suite with npm test. In that case the test suite contained all tests for the application.

Test code is included with and structured similarly to implementation code. Often times changes to 
test code are associated with changes to implementation code and vice versa. Both are easier to 
maintain when they are stored in the same place.

For example, if implementation code is written in index.js then the corresponding test code may be 
written in index-test.js.

*/

// Test As Documentation

/*

Imagine explaining this Cake Bar app to someone else. How does it behave? Does it rely on other 
software? How do you run it on a computer? You could read every line in every file to figure that 
out. Or you could read the documentation.

Documentation is any content separate from implementation code that explains how it works or how to 
use it. It may provide more concise summaries and explanation than the implementation code can.

Documentation can come in many forms, including plain text, diagrams…and tests! Tests as 
documentation provide what many other forms cannot: both human-readable text to describe the 
application and machine-executable code to confirm the app works as described.

This code block from the Cake Bar app describes and tests the “name” functionality.


*/

it('accepts the customer name', () => {
  const name = 'Hungry Person';

  browser.url('/');
  browser.setValue('#name', name);
  browser.click('#submit-order');
  browser.url('/');

  assert.include(browser.getText('#deliver-to'), name);
});

/*

You can read the description in plain English terms: it accepts the customer name. You can run the 
test to confirm the functionality works as described.

*/

// Regression

/*

The new “clear order” button feature has been implemented to satisfy the new test.

When adding a new feature to your product, it’s possible that something will break. If that break 
occurs within a feature developed earlier, it is called regression. When functionality previously 
developed and tested stops working, you may say the functionality regressed.

Running an automated test suite is fast and repeatable, which means you can run tests after every 
change to confirm that old features still work. If they have regressed, the test output should 
notify you.

*/

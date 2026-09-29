# Feature: Ecommerce validation
# Scenario: placing order
# Given login to application with "shrestisingh456@gmail.com" and "Letmein1!"
# When  "ADIDAS ORIGINAL" Add to cart
# Then "ADIDAS ORIGINAL" should be display in the cart
# When I enter details and placed the order
# Then it should ordered successfully .

# Scenario: placing order
# Given I logged into the application
#     Then I should see "Hide/Show Example" textbox
#     When I click on Hide button
#     Then "Hide/Show Example" textbox should be hidden


# Feature:Benefit application
# Scenario:login application
# Given I login to application  "https://benefits-qa.bbsi.com/"
# When I login as a "shresti.singh@bbsihq.com" and "Neelamdeepak@456"
# Then I should be able to login successfully
# And I should  also see "Retirement" header .
 
# Scenario: Retirement plan types
 
# When I click on "hamburgermenu"
# Then I should see "Retirement Plan Types"
# When I add "Retirement Plan Types" successfully
# Then I should see snackbar message

--back to portal
Feature: Back to portal
@backtoportal
Scenario: Back to portal link
 
Given I login to application with "shresti.singh@bbsihq.com"  and "Neelamdeepak@456"
When I click on back to portal
Then it should able to navigate successfully..
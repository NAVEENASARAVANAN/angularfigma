app.controller('editController', function ($scope, $http,$rootScope) {
    $scope.details = true;
    $scope.actButton = false;
    $rootScope.prorate = true;
   
    $scope.insertData = function () {
        $scope.details_data = {
            "title": $scope.details_title,
            "subtitle": $scope.details_subtitle,
            "description": $scope.description
        };
        $scope.payment_data = {
            "pay_structure": $scope.pay_structure,
            "pay_billing_plan": $scope.pay_billing_plan,
            "pay_signup_fee": $scope.pay_signup_fee,
            "charge_signup_fee": $scope.charge_signup_fee,
            "pay_membership_fee": $scope.pay_membership_fee,
            "recurring": $scope.recurring,
            "recurring_frequency": $scope.recurring_frequency,
            "charge_first_payment": $scope.charge_first_payment,
            "delay_pay": $scope.delay_pay,
            "prorate_pay_period": $scope.prorate_pay_period,
            "use_attendance_limit": $scope.use_attendance_limit,
            "expiration_count": $scope.expiration_count,
            "exp_monthy": $scope.exp_monthy
        };
        $scope.automation_data = {
            "auto_renew_mem": $scope.auto_renew_mem,
            "automation_timing": $scope.automation_timing,
            "automation_charge_signupfee": $scope.automation_charge_signupfee,
            "add_automation_input": $scope.add_automation_input
        };
        $scope.discount_data = {
            "discount_code_name": $scope.discount_code_name,
            "selecting_fee_type": $scope.selecting_fee_type,
            "discount_amount_percent": $scope.discount_amount_percent
        };

        $http({
            method: "POST",
            url: "api/controller.php/insert_val",
            data: {
                'details_form': $scope.details_data,
                'payment_form': $scope.payment_data,
                'automation_form': $scope.automation_data,
                'discount_form': $scope.discount_data
            }
        }).then(function success(response) {
            $scope.userdata = response.data;
            window.location = './index.html';
        }, function error(response) {
            $scope.userdata = response.data;
            console.log($scope.userdata);
        });
    }

    $scope.label = function (type) {
        if (type == 'details') {
            $scope.details = !$scope.details;
            $scope.payment = false;
            $scope.automation = false;
            $scope.discount = false;
            $scope.condition = false;
        } else if (type == 'payment') {
            $scope.details = false;
            $scope.payment = !$scope.payment;
            $scope.automation = false;
            $scope.discountform = true;
            $scope.discount = false;
            $scope.condition = false;
        }
        else if (type == 'automation') {
            $scope.details = false;
            $scope.payment = false;
            $scope.automation = !$scope.automation;
            $scope.discountform = true;
            $scope.discount = false;
            $scope.condition = false;
        }
        else if (type == 'discount') {
            $scope.details = false;
            $scope.payment = false;
            $scope.automation = false;
            $scope.discountform = true;
            $scope.discount = !$scope.discount;
            $scope.conditionform = true;
            $scope.condition = false;
        } else if (type == 'condition') {
            $scope.details = false;
            $scope.payment = false;
            $scope.automation = false;
            $scope.discountform = true;
            $scope.discount = false;
            $scope.conditionform = true;
            $scope.condition = !$scope.condition;
        }
    }
    

    $scope.GetSelectedValue = function (index, optionType) {
        if (optionType == 'size') {
            $scope.sizeSelect = $scope.sizeOptions[index].option;
        } else if (optionType == 'OE') {
            $scope.pay_structure = $scope.openOptions[index].option;
            if ($scope.pay_structure == 'Custom') {
                $scope.billingLabel = true;
                $rootScope.prorate = false;
                $scope.expirationDays = true;
                $scope.recurringInput = true;
                $scope.pay_billing_plan = "Payment Plan";
                $scope.exp_monthy = "Month(s)";

            } else {
                $scope.billingLabel = false;
                $rootScope.prorate = true;
                $scope.expirationDays = false;
                $scope.recurringInput = false;
                $scope.pay_billing_plan = null;
                $scope.exp_monthy = null;

            }
        } else if (optionType == 'BO') {
            $scope.pay_billing_plan = $scope.billingOptions[index].option;
        } else if (optionType == 'SU') {
            $scope.charge_signup_fee = $scope.signupOptions[index].option;
        } else if (optionType == 'RF') {
            $scope.recurring_frequency = $scope.recurringOptions[index].option;
        } else if (optionType == 'FP') {
            $scope.charge_first_payment = $scope.firstPaymentOptions[index].option;
        } else if (optionType == 'ED') {
            $scope.exp_monthy = $scope.expMonthyOptions[index].option;
        } else if (optionType == 'AO') {
            $scope.automation_timing = $scope.activityOptions[index].option;
        } else if (optionType == 'SF') {
            $scope.automation_charge_signupfee = $scope.SignupFeeOptions[index].option;
        } else if (optionType == 'DS') {
            $scope.selecting_fee_type = $scope.discountSelectOptions[index].option;
        }
    }

    $scope.sizeOptions = [
        { option: "10px" },
        { option: "13px" },
        { option: "16px" },
        { option: "24px" },
        { option: "32px" }
    ];
    $scope.openOptions = [
        { option: "Open enrollment" },
        { option: "Custom" },
        { option: "Has specific start and end date" },
        { option: "Class packages" }
    ];
    $scope.billingOptions = [
        { option: "Payment Plan" },
        { option: "Pay in full" },
    ];
    $scope.signupOptions = [
        { option: "At time of registration" },
        { option: "On membership start date" }
    ];
    $scope.recurringOptions = [
        { option: "Monthly" },
        { option: "Weekly" },
        { option: "Annualy" },
        { option: "Custom" }
    ];
    $scope.firstPaymentOptions = [
        { option: "At time of registration" },
        { option: "At program start date" },
        { option: "Select payment start date" }
    ];
    $scope.expMonthyOptions = [
        { option: "Month(s)" },
        { option: "Year(s)" },
        { option: "Week(s)" }
    ];
    $scope.activityOptions = [
        { option: "Current Membership Option" },
        { option: "After School Arts and Crafts Long Option" },
        { option: "After School Activities" },
        { option: "After School Sports" },
    ];
    $scope.SignupFeeOptions = [
        { option: "Do Not Charge Sign-up Fee" },
        { option: "Charge Sign-up Fee" }
    ];
    $scope.discountSelectOptions = [
        { option: "Membership Fee" },
        { option: "Sign-up Fee" }
    ];
    $scope.addItem = function (user) {
        $scope.alluser.push(user);
    };

    if (window.innerWidth <= 600) {
        $scope.details = false;
        $scope.actButton = true;
    }

});
app.controller('firstpageController', function ($scope,$http) {
    $scope.hiding = true;
        $scope.showing = false;
    $scope.show= function () {
        $scope.hiding = false;
        $scope.showing = true;
    }
    $scope.editShow = function () {
        $scope.hiding = false;
        $scope.showing = true;
        //     $scope.membership = [
        //         { title: "Yoga Pass Gold",
        //           subtitle: "All Access to All Yoga Classes"}    
        //     ];
        //     $scope.membershipInputTitle = $scope.membership[0].title;
        //     $scope.membershipInputSubtitle = $scope.membership[0].subtitle;
        $http({
            method : "GET",
              url : "data.json"
          }).then(function mySuccess(response) {
            $scope.membershipInputTitle  = response.data[0].title;
            $scope.membershipInputSubtitle = response.data[1].subtitle;
          });
        }
});
app.controller('editController', function ($scope) {
    $scope.details = true;
    $scope.prorate = true;
    $scope.actButton = false;
    $scope.valueofrupee='30';

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
    $scope.sizeSelect = "13px";
    $scope.openuserSelect = "Open Enrollment";
    $scope.signupuserSelect = "At time of registration";
    $scope.recurringuserSelect = "Monthly";
    $scope.firstPaymentuserSelect = "At time of registration";
    $scope.activityuserSelect = "After School Arts and Crafts Long Option";
    $scope.signupFeeuserSelect = "Do Not Charge Sign-up Fee";
    $scope.discountuserSelect = "Membership Fee";

    $scope.GetSelectedValue = function (index, optionType) {
        if (optionType == 'size') {
            $scope.sizeSelect = $scope.sizeOptions[index].option;
        }else if (optionType == 'OE') {
            $scope.openuserSelect = $scope.openOptions[index].option;
            if ($scope.openuserSelect == 'Custom') {
                $scope.billingLabel = true;
                $scope.prorate = false;
                $scope.expirationDays = true;
                $scope.recurringInput = true;
            } else {
                $scope.billingLabel = false;
                $scope.prorate = true;
                $scope.expirationDays = false;
                $scope.recurringInput = false;
            }
        } else if (optionType == 'SU') {
            $scope.signupuserSelect = $scope.signupOptions[index].option;
        } else if (optionType == 'RF') {
            $scope.recurringuserSelect = $scope.recurringOptions[index].option;
        } else if (optionType == 'FP') {
            $scope.firstPaymentuserSelect = $scope.firstPaymentOptions[index].option;
        } else if (optionType == 'AO') {
            $scope.activityuserSelect = $scope.activityOptions[index].option;
        } else if (optionType == 'SF') {
            $scope.signupFeeuserSelect = $scope.SignupFeeOptions[index].option;
        } else if (optionType == 'DS') {
            $scope.discountuserSelect = $scope.discountSelectOptions[index].option;
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
        { option: "Has specific start and end date" },
        { option: "Class packages" }
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
    $scope.addItem = function(user) {
        $scope.alluser.push(user);
      };
  
    if (window.innerWidth <= 600) {
        $scope.details = false;
        $scope.actButton = true;
    }
});
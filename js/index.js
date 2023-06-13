app.controller('firstpageController', function ($scope, $http,$rootScope) {
    $scope.viewing = true;
    $scope.showme = false;
    $scope.show = function () {
        $scope.viewing = false;
        $scope.showme = true;
        $scope.details_title = '';
        $scope.details_subtitle = '';
        $scope.sizeSelect = "13px";
        $scope.description = '';
        $scope.pay_structure = "Open enrollment";
        $scope.pay_billing_plan = "Payment Plan";
        $scope.pay_signup_fee = '';
        $scope.charge_signup_fee = "At time of registration";
        $scope.pay_membership_fee = '';
        $scope.recurring = '';
        $scope.recurring_frequency = "Monthly";
        $scope.charge_first_payment = "At time of registration";
        $scope.delay_pay = '';
        $scope.prorate_pay_period = '';
        $scope.use_attendance_limit = '';
        $scope.expiration_count = '';
        $scope.exp_monthy = "Month(s)";
        $scope.auto_renew_mem = '';
        $scope.automation_timing = "After School Arts and Crafts Long Option";
        $scope.automation_charge_signupfee = "Do Not Charge Sign-up Fee";
        $scope.add_automation_input = '';
        $scope.discount_code_name = '';
        $scope.selecting_fee_type = "Membership Fee";
        $scope.discount_amount_percent = '';


    }

    $scope.user;
    $scope.getuser = function () {
        $http({
            method: "GET",
            url: "api/controller.php/get_val"
        }).then(function success(response) {
            $scope.user = response.data;
        }, function error(response){
            $scope.user = response.data;
            console.log($scope.user);
        });
    };

    $scope.deleteuser = function (id) {
        $http({
            method: 'POST',
            url: 'api/controller.php/delete_val',
            data: { 'id': id }
        }).then(function success(response) {
            $scope.getuser();
        }, function error(response) {
            console.log(response.data, response.status);
        });
    };
    $scope.getuser();

    $scope.edit = function (id) {
        $scope.viewing = false;
        $scope.showme = true;
        $scope.user;
        $http({
            url: 'api/controller.php/edit_val?id='+id,
            method: 'GET'
          }).then(function(response){
            $scope.user = response.data;
            console.log($scope.user);
            $scope.details_title =$scope.user.details_title;
            $scope.details_subtitle = $scope.user.details_subtitle;
            $scope.description = $scope.user.details_description;
              if ($scope.user.pay_structure == 'Custom') {
              $scope.billingLabel = true;
              $rootScope.prorate = false;
              $scope.expirationDays = true;
              $scope.recurringInput = true;
          } else {
              $scope.billingLabel = false;
              $rootScope.prorate = true;
              $scope.expirationDays = false;
              $scope.recurringInput = false;
          }
          $scope.pay_structure = $scope.user.pay_structure;
          $scope.pay_billing_plan = $scope.user.pay_billing_plan;
          $scope.pay_signup_fee = $scope.user.pay_signup_fee;
          $scope.charge_signup_fee = $scope.user.charge_signup_fee;
          $scope.pay_membership_fee = $scope.user.pay_membership_fee;
          $scope.recurring = $scope.user.recurring;
          $scope.recurring_frequency = $scope.user.recurring_frequency;
          $scope.charge_first_payment = $scope.user.charge_first_payment;
          $scope.delay_pay = $scope.user.delay_pay;
          $scope.prorate_pay_period =$scope.user.prorate_pay_period;
          $scope.use_attendance_limit = $scope.user.use_attendance_limit;
          $scope.expiration_count = $scope.user.expiration_count;
          $scope.exp_monthy = $scope.user.exp_monthy;
          $scope.auto_renew_mem = $scope.user.auto_renew_mem;
          console.log($scope.auto_renew_mem );
          $scope.automation_timing = $scope.user.automation_timing;
          $scope.automation_charge_signupfee = $scope.user.automation_charge_signupfee;
          $scope.add_automation_input = $scope.user.add_automation_input;
          $scope.discount_code_name = $scope.user.discount_code_name;
          $scope.selecting_fee_type = $scope.user.selecting_fee_type;
          $scope.discount_amount_percent = $scope.user.discount_amount_percent;
  
          });
    }
    
});


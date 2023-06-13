<?php
require_once 'connect.php';
class model
{
    //insert query
    public function insert($title, $subtitle, $description, $pay_structure, $pay_billing_plan, $pay_signup_fee, $charge_signup_fee, $pay_membership_fee, $recurring, $recurring_frequency, $charge_first_payment, $delay_pay, $prorate_pay_period, $use_attendance_limit, $expiration_count, $exp_monthy, $auto_renew_mem, $automation_timing, $automation_charge_signupfee, $add_automation_input, $discount_code_name, $selecting_fee_type, $discount_amount_percent)
    {
        global $connect;
        
        $insert_details = "INSERT INTO membership_details(details_title, details_subtitle,details_description)
        VALUES('$title','$subtitle','$description')";
        $sql_detail = mysqli_query($connect, $insert_details);

        $insert_payment = "INSERT INTO membership_payment(pay_structure,pay_billing_plan,pay_signup_fee,charge_signup_fee,pay_membership_fee,recurring,recurring_frequency,charge_first_payment,delay_pay,prorate_pay_period,use_attendance_limit,expiration_count, exp_monthy)
        VALUES('$pay_structure','$pay_billing_plan','$pay_signup_fee','$charge_signup_fee','$pay_membership_fee','$recurring','$recurring_frequency','$charge_first_payment','$delay_pay','$prorate_pay_period','$use_attendance_limit','$expiration_count', '$exp_monthy')";
        $sql_payment = mysqli_query($connect, $insert_payment);

        $insert_automation = "INSERT INTO membership_automation(auto_renew_mem,automation_timing,automation_charge_signupfee,add_automation_input)
        VALUES('$auto_renew_mem','$automation_timing','$automation_charge_signupfee','$add_automation_input')";
        $sql_automation = mysqli_query($connect, $insert_automation);

      
        $insert_discount = "INSERT INTO membership_discount(discount_code_name,selecting_fee_type,discount_amount_percent)
        VALUES('$discount_code_name','$selecting_fee_type','$discount_amount_percent')";
        $sql_discount = mysqli_query($connect, $insert_discount);

        echo "Affected rows: " . mysqli_affected_rows($connect);

        if (!$sql_detail && !$sql_payment && !$sql_automation && !$sql_discount) {
            
            $error = array('status' => "Failed", "msg" => "No records created");
        } else {
            $error = array('status' => "Success", "msg" => "New record created successfully");
        }
        exit(json_encode($error));

    }
    // select query
    public function get()
    {
        global $connect;

        $select = "SELECT * FROM membership_details";
        
        $result = mysqli_query($connect, $select) or die('error');
        $num_of_rows1 = mysqli_num_rows($result);

        if ($num_of_rows1 > 0) {

            while ($row = mysqli_fetch_array($result)) {
                $id = $row['details_id'];
                $title = $row['details_title'];
                $subtitle = $row['details_subtitle'];
                $description = $row['details_description'];
                
               
                $return_arr[] = array(
                    "details_id" => $id,
                    "details_title" => $title,
                    "details_subtitle" => $subtitle,
                    "details_description"=>$description   
                );
            }       
            exit(json_encode($return_arr));
        } else {
            $failed = array('status' => "Failed", "msg" => "No records found in db");
            exit(json_encode($failed));

        }
    }
//Delete query
    public function delete($id)
    {
        global $connect;

        $sql = "DELETE membership_details,membership_payment,membership_automation,membership_discount 
        FROM membership_details 
        INNER JOIN membership_payment ON details_id=payment_id 
        INNER JOIN membership_automation ON details_id=automation_id 
        INNER JOIN membership_discount ON details_id=discount_id 
        where details_id='$id'";

        $result = mysqli_query($connect, $sql);

        if (!$result) {
            $error = array('status' => "Failed", "msg" => "No records deleted");
        } else {
            $error = array('status' => "Success", "msg" => "record delete succesfully in db");
        }
        exit(json_encode($error));
    }

    //edit query
    public function edit($id)
    {
    global $connect;
    $sql = "SELECT * FROM membership_details
            INNER JOIN membership_payment ON details_id=payment_id 
            INNER JOIN membership_automation ON details_id=automation_id 
            INNER JOIN membership_discount ON details_id=discount_id 
            where details_id='".$id."'"; 
    $result = mysqli_query($connect, $sql);
    $data = $result->fetch_assoc();
    
    echo json_encode($data);
    }



}
?>
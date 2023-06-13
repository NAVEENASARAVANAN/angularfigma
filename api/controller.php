<?php
require_once 'model.php';

$controller = new controller();
class controller
{    
    public $model;
   public function __construct()
    {
        $this->model = new model();
        $url = explode("/", parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
        $endpointUrl = array_pop($url);
        if ($endpointUrl == "insert_val") {
            $this->insert_val();
        } else if ($endpointUrl == "get_val") {
            $this->get_val();
        } else if ($endpointUrl == "delete_val") {
            $this->delete_val();
        }else if ($endpointUrl == "edit_val") {
            $this->edit_val();
        }else {
            $failed = array('status' => "Failed", "msg" => "url doesn't match");
            exit(json_encode($failed));
        }

    }
//insert function
    public function insert_val()
    {

            $this->$_REQUEST = json_decode(file_get_contents('php://input'), true);
       // print_r ($this->$_REQUEST);
        
        $title=$this->$_REQUEST['details_form']['title'];
        $subtitle=$this->$_REQUEST['details_form']['subtitle'];
        $description=$this->$_REQUEST['details_form']['description'];

        $pay_structure = $this->$_REQUEST['payment_form']['pay_structure'];
        $pay_billing_plan = $this->$_REQUEST['payment_form']['pay_billing_plan'];
        $pay_signup_fee = $this->$_REQUEST['payment_form']['pay_signup_fee'];
        $charge_signup_fee = $this->$_REQUEST['payment_form']['charge_signup_fee'];
        $pay_membership_fee = $this->$_REQUEST['payment_form']['pay_membership_fee'];
        $recurring = $this->$_REQUEST['payment_form']['recurring'];
        $recurring_frequency = $this->$_REQUEST['payment_form']['recurring_frequency'];
        $charge_first_payment = $this->$_REQUEST['payment_form']['charge_first_payment'];
        $delay_pay = $this->$_REQUEST['payment_form']['delay_pay'];
        $prorate_pay_period = $this->$_REQUEST['payment_form']['prorate_pay_period'];
        $use_attendance_limit = $this->$_REQUEST['payment_form']['use_attendance_limit'];
        $expiration_count = $this->$_REQUEST['payment_form']['expiration_count'];
        $exp_monthy = $this->$_REQUEST['payment_form']['exp_monthy'];

        $auto_renew_mem=$this->$_REQUEST['automation_form']['auto_renew_mem'];
        $automation_timing=$this->$_REQUEST['automation_form']['automation_timing'];
        $automation_charge_signupfee=$this->$_REQUEST['automation_form']['automation_charge_signupfee'];
        $add_automation_input=$this->$_REQUEST['automation_form']['add_automation_input'];

        $discount_code_name = $this->$_REQUEST['discount_form']['discount_code_name'];
        $selecting_fee_type = $this->$_REQUEST['discount_form']['selecting_fee_type'];
        $discount_amount_percent = $this->$_REQUEST['discount_form']['discount_amount_percent'];

        if (isset($title) && !empty($title) && isset($pay_structure) && isset($auto_renew_mem) && !empty($auto_renew_mem) && isset($discount_code_name) ) {
        $this->model->insert($title, $subtitle, $description, $pay_structure, $pay_billing_plan, $pay_signup_fee, $charge_signup_fee, $pay_membership_fee, $recurring, $recurring_frequency, $charge_first_payment, $delay_pay, $prorate_pay_period, $use_attendance_limit, $expiration_count, $exp_monthy, $auto_renew_mem, $automation_timing, $automation_charge_signupfee, $add_automation_input, $discount_code_name, $selecting_fee_type, $discount_amount_percent);
        }else{
            $failed = array('status' => "Failed", "msg" => " Data doesn't inserted");
            exit(json_encode($failed));
        }
        }
    
//get function
    public function get_val()
    {
        $this->model->get();
        exit;

    }


//delete
    public function delete_val()
    {

        $this->$_REQUEST = json_decode(file_get_contents('php://input'), true);
        
        $id = $this->$_REQUEST['id'];
        echo $id;
        if (isset($id)) {
            $this->model->delete($id);
            exit;
        }else{
            $failed = array('status' => "Failed", "msg" => "No records  deleted");
            exit(json_encode($failed));
        }


    }
    public function edit_val(){
       
        $id = $_GET['id'];
        
        if (isset($id)) {
            $this->model->edit($id);
            exit;
        }
    }


}

?>
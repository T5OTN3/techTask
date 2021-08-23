import axios from "axios";

export default async function handler(req, res){
    const { phone } = req.query;
    const code = 244556;
        
    //const smsRespone = await axios(`https://api.budgetsms.net/sendsms/?username=meta&handle=4afdd7e78440a1b6fdd326d1144538a7&userid=9117&msg=${code}&from=BudgetSMS&to=995${phone}`);
    //console.log(smsRespone.data);

    //todo if phone exist in DB and status is not verify
    if(phone){
        res.status(200).json({
            phone,
            code: '12344'
        }); 
    }else{
        res.status(404).json({
            message: `${phone} is not found or already verified`
        }); 
    }


}
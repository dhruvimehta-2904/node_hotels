const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema ({
    name:{
        type:String,
        reuired:true
    },
    price:{
        type:Number,
        reuired: true
        
    },
    taste:{
        type: String,
        enum:['sweet','spicy','sour'],
        reuired: true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{   //array
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default: 0,
    }

})
//connected

const menuitem = mongoose.model('menuItem', menuSchema);
module.exports = menuitem;


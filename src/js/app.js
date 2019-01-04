var Web3 = require('web3');



  var wb;
  var worksheet = [];
  var text = [];
  var rABS = false; 

  function importExcel() {
      var obj = document.getElementById("sub4")
      console.log(obj.value)
      console.log("debug");
      console.log(obj.files);
    if (!obj.files) {
      return;
    }
    const IMPORTFILE_MAXSIZE = 1 * 2048;
    var suffix = obj.files[0].name.split(".")[1]
    if (suffix != 'xls' && suffix != 'xlsx') {
      alert('导入的文件格式不正确!')
      return
    }
    if (obj.files[0].size / 1024 > IMPORTFILE_MAXSIZE) {
      alert('导入的表格文件不能大于2M')
      return
    }
    var f = obj.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      if (rABS) {
        wb = XLSX.read(btoa(fixdata(data)), { 
          type: 'base64'
        });
      } else {
        wb = XLSX.read(data, {
          type: 'binary'
        });
      }

      worksheet = JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
      var u = eval('(' + worksheet + ')');
      console.log(u);
      for (var i = 0; i < u.length; i++) {
        text.push(u[i].dizhi);
        console.log(u[i]);
      }

      console.log(text);
      document.getElementById("dizhi").innerHTML = text;
    };
    if (rABS) {
      reader.readAsArrayBuffer(f);
    } else {
      reader.readAsBinaryString(f);
    }
  }

  



var abi1 = [
  {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
          {
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_spender",
              "type": "address"
          },
          {
              "name": "_value",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_from",
              "type": "address"
          },
          {
              "name": "_to",
              "type": "address"
          },
          {
              "name": "_value",
              "type": "uint256"
          }
      ],
      "name": "transferFrom",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
          {
              "name": "",
              "type": "uint8"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "_owner",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "name": "balance",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
          {
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_to",
              "type": "address"
          },
          {
              "name": "_value",
              "type": "uint256"
          }
      ],
      "name": "transfer",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "_owner",
              "type": "address"
          },
          {
              "name": "_spender",
              "type": "address"
          }
      ],
      "name": "allowance",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "spender",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "to",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event"
  }
];




var address2 = "0x7fe294fc310aa4cf4c0b6c6fff328acdfd4ad1cf";

var abi2 = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_tokenAddr",
				"type": "address"
			},
			{
				"name": "dests",
				"type": "address[]"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "multisend",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var airdrop = web3.eth.contract(abi2).at(address2);




function chaxun(){

        account=web3.eth.coinbase;
        var address1 = document.getElementById("dbaddress").value;
        var daibi = web3.eth.contract(abi1).at(address1);

        daibi.decimals.call(function(err,result){
            if (!err){
            var dbdecimals=document.getElementById("dbdecimals")
            dbdecimals.value = result; 
            } 
           });
           var decimals1 = document.getElementById("dbdecimals").value;
        
        daibi.name.call(function(err,result){
         if (!err){
         var dbname=document.getElementById("dbname")
         dbname.value = result; 
         } 
        });

        daibi.totalSupply.call(function(err,result){
          if (!err){
          var dbtotal=document.getElementById("dbtotal")
          dbtotal.value = (result/(Math.pow(10,decimals1))).toFixed(decimals1); 
          } 
        });

        daibi.balanceOf.call(account,function(err,result){
            if (!err){
            var dbownnum=document.getElementById("dbownnum")
            dbownnum.value = (result/(Math.pow(10,decimals1))).toFixed(decimals1); 
            } 
          });
        
    
        daibi.allowance.call(account,address2,function(err,result){
            if (!err){
            var yauthdbnum=document.getElementById("yauthdbnum")
            yauthdbnum.value = (result/(Math.pow(10,decimals1))).toFixed(decimals1); 
            } 
          })

    
   };

   function shouquan(){
    account=web3.eth.coinbase;
    var decimals2 = document.getElementById("dbdecimals").value;
    var address12 = document.getElementById("dbaddress").value;
    var daibi12 = web3.eth.contract(abi1).at(address12);
    var value1 = document.getElementById("dbauthnum").value;
    var value2 = value1*(Math.pow(10,decimals2));
    var mydata=daibi12.approve.getData(address2,value2);
    web3.eth.sendTransaction({data: mydata, from: account, to: address12}, function(err, transactionHash) {
        if (!err)
          console.log(transactionHash); 
        else
          console.log(err);
      });
   }

   function kongtou(){
    account=web3.eth.coinbase;
    var decimals3 = document.getElementById("dbdecimals").value;
    var address13 = document.getElementById("dbaddress").value;
    var value3 = document.getElementById("pinjun").value;
    var value4 = value3*(Math.pow(10,decimals3));
    var airdrop1 = web3.eth.contract(abi2).at(address2);
    var mydata=airdrop1.multisend.getData(address13,text,value4);
    web3.eth.sendTransaction({data: mydata, from: account, to: address2}, function(err, transactionHash) {
        if (!err)
          console.log(transactionHash); 
        else
          console.log(err);
      });

      
   }

document.getElementById("sub3").onclick=chaxun;
document.getElementById("sub").onclick=shouquan;
document.getElementById("sub4").onchange=importExcel;
document.getElementById("sub2").onclick=kongtou;

var accounts;
var account;



window.App = {
  start: function() {
    var self = this;

    
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      accounts = accs;
      account = accounts[0];
    });
  }
  
};



window.addEventListener('load', async () => {

   
    
    if (window.ethereum) {
    
    window.web3 = new Web3(ethereum);
    
    try {
    
  
    
    await ethereum.enable();
    
    alert(web3.eth.coinbase);
    
    
    
    /* web3.eth.sendTransaction({/* ... */ 
    
    } catch (error) {
    
    console.log(error);
    
    
    
    }
    
    }
    
  
    
    else if (window.web3) {
    
    window.web3 = new Web3(web3.currentProvider);
    

    
    web3.eth.sendTransaction({ });
    
    }
    
  
    
    else {
    
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    
    }
    
    });

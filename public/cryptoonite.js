
      var wallet_monitor = "";

      //MARK: - Test script with - First transaction recorde == false
      // BE QUICK, test with pending transaction from Etherscan - Insert Wallet - FROM(transaction)
      // sweet alert implement
      // UI - frontend
      // While loop - inifnity or request every 3 second

      //MARK: Get Account wallets To Listen to
      function requestAccountsWallet(){

      var request = $.ajax({
          method: "GET",
          dataType: "json",
          url: "ajax-request",
          cache: false
        });

        request.done(function(jData) {

              // First walllet to test
              wallet_monitor = jData[0];

              $.each(jData, function(i, trxt) {
                  //console.log(trxt);
                  $('.transaction-list').append(
                        '<tr>' +
                          '<th scope="row">3</th>' +
                          '<td>'+ trxt+'</td>' +
                        '</tr>');
                  });
                getTransactionBlockchain();
          });

        request.fail(function(textStatus) {
              alert('Failed', textStatus);
          });
      }


      // MARK: - Get Latest Transactions from Blockchain
      function getTransactionBlockchain() {
          var txCount = web3.eth.getBlockTransactionCount('latest', function(error, txCount) {
              if (!error) {
                console.log('Latest BLOCK contains ' + txCount + ' Transactions:');
                for (var i = 0; i < txCount; i++) {
                  web3.eth.getTransactionFromBlock('latest', i, function(err, transaction) {
                    if (!err) {
                    //  console.log(transaction);
                      logTransaction(transaction);
                        if (wallet_monitor == transaction.to || transaction.from) {
                          console.log('Monitored Adress Matched', wallet_monitor + ' Transaction Activity from the Blockchain - to = '+ transaction.to + transaction.from );
                        }
                    //  console.log('Transaction to wallet:', transaction.to)
                    //  console.log('Transaction from wallet:', transaction.from)

                    } else {
                      console.error(err);
                    }
                  });
                }
              } else {
                console.error(error);
              }
            });
        }

        // compare latest transactions. to or from addres == watchContract -->
        //0xDd9fd6b6F8f7ea932997992bbE67EabB3e316f3C

     var watchContract = "0x577aa2275bf1c55729d1fa68b8fffacc7eb979ae".toLowerCase(); // Monitor change TO MONITOR WALLET  OR INPUT SPECIFC WITHOUT VIRTUAL TEST
     var filter = web3.eth.filter('pending'); //set up the filter

    //a helper function to write transaction data to the console
    function logTransaction(transaction) {
      var logString = "Transaction detected\n" +
        "TxHash: " + transaction.hash + "\n" +
        "From: " + transaction.from + "\n" +
        "To: " + transaction.to + "\n" +
        "Value: " + transaction.value + "\n" +
        "Data: \n" + transaction.input + "\n";
    //  console.log(logString);
    }

    //a helper function to handle a transaction
    function handleTransaction(transaction) {
      if (transaction.from == watchContract || (transaction.to != null && transaction.to == watchContract)) { //check if the transaction is related to our contract (Note: 'to' is null for a contract creation)
        logTransaction(transaction); //this transaction relates to our contract, so add it to the log

            console.log('Match  Transaction from : ', transaction.from , '== ', watchContract)
            console.log(' TxHash: ' , transaction.hash);
            console.log(' Value: ', transaction.value);
            console.log(' Data: ', transaction.input);
            console.log(' TO:' , transaction.to);

            // ALERT INPUT WALLET ADRESS ACTIVITY IS IN BLOCKHAIN ON PENDING TRANSACTION!!!
            alert('Warning!', 'PENDING TRANSACTIONS IS RUNNING ON BLOCK CHAIN - OUTGOING WALLET ', transaction.from);



            // MONITORED/WATCHCONTRACT Activity - Start Track Transaction HASH and where cryto is send to
            var wallet_receiver_surveliance = transaction.to;

            // Comparing Transaction Wallet that is receveing Crypto
            if(wallet_receiver_surveliance == 'binane adres ' || 'krakenadress' ||  'bitfinex adress'){
                //NEW ALARM  - Asset is sent to a Big Exchange --> Contact now to freeze ammount while TXT is pending!
                // --> Alert user -> So the exchange can be Notified for BLOCKING THE TRANSACTION AND FREEZING THE WALLET!
            }
      }
      //ignore the rest of the transactions
    }

    //subscribe to the filter
    filter.watch(function(err, pendingTx) {
      if (!err) {
        web3.eth.getTransaction(pendingTx, function(err, transaction) { //get the transaction
          if (!err && transaction) {
            handleTransaction(transaction); //pass the transaction into the helper function to perform necessary checks and log events
          }
        });
      } else {
        console.error(err); //in case any error happens, log the error
      }
    });

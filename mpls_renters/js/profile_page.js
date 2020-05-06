            //Write some statements to get the count of the number of offers.


            window.addEventListener('load', getOfferCount);
            //window.addEventListener('load', determineDayCount);
            
            //Defining the function
            function getOfferCount(){
                //statement that gets all the offer elements in document.
                var offerList = document.getElementsByClassName('aoffer');
                var offerListCount = offerList.length;
                
                document.getElementById("offer_count").innerHTML = offerListCount;
                determineDayCount();
            }

            //Defining a function that will determine box shadow based on how old an offer is
            function determineDayCount(){

                var borderColors =["4px 4px 10px green","4px 4px 10px yellow","4px 4px 10px red"];
                var offerList = document.getElementsByClassName('aoffer');

                for(var i = 0; i < offerList.length; i++){
                    //Decision Making Logic
                    if(offerList[i].dataset.daycount < 5){
                        offerList[i].style.boxShadow = borderColors[0];
                    }else if(offerList[i].dataset.daycount < 10){
                        offerList[i].style.boxShadow = borderColors[1];
                    }else{
                        offerList[i].style.boxShadow = borderColors[2];
                    }
                }


            }
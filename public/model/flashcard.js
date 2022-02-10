/**************************************************
*               Created Thread Class
**************************************************/
export class Flashcard{
    constructor(data){
        //Picture Related DATA
        this.imageName = data.imageName;
        this.imageURL = data.imageURL;
        //COMMENTED BELOW ABOUT DELVING/EXPANDING FURTHER
        // this.questionImageName = data.questionImageName;
        // this.questionImageURL = data.questionImageURL;
        // this.answerImageName = data.answerImageName;
        // this.answerImageURL = data.questionImageURL;

        //Need Question
        //Need Incorrect Answer(s) --->[]?
        //Need Correct Answer

    }


/**************************************************
     *      Setter for the Document ID
**************************************************/
    set_docID(ID){
        this.docID = ID;
    }

/************************************************************************
     *                          toFirestore Method
     ********************************************************************
     *      This method will serialize the data so 
     *      that it will be compatible with the 
     *      Firestore. A link to supported types:
     *      https://cloud.google.com/firestore/docs/concepts/data-types
     *      Acceptable types:
     *      -boolean
     *      -array
     *      -string
     *      -map
     *      -timestamp
     *      -floating-point & integer
**************************************************************************/
        toFirestore(timestamp){
            return {
                // This seems a bit much lets see the modal and expand to this.
                // questionImageName:      this.questionImageName, 
                // questionImageURL:       this.questionImageURL, 
                // answerImageName:        this.answerImageName, 
                // questionImageURL:       this.answerImageURL,
                imageName: this.imageName,
                imageURL: this.imageURL,
                /*
                When we add the functions for serializing the flashcard
                to Firestore, timestamp will be passed by the function
                allowing us to display creation data for when the deck
                was created - Cody
                */
                timestamp,
                //Need Question
                //Need Incorrect Answer(s) --->[]?
                //Need Correct Answer
            };
        }

/***************************************************************************
 *                  Type Checking
 * *************************************************************************
 *      This will ensure the user inputs of the correct type. 
 *      Will prompt for an error, claimed in the error tags in index.html 
***************************************************************************/
        static isSerializedProduct(obj){
            
            if(!obj.imageName || typeof obj.imageName != 'string') return false;
            if(!obj.imageURL || !obj.imageURL.include('https')) return false;
            //Need Question
            //Need Incorect Answers
            //Need Correct Answer
        }

/***************************************************************************
 *                  (UNDER CONSTRUCTION FOR A LATER STORY)
 *                  Serialization For Editing/Updating
 * *************************************************************************
 *      This will allow updating to be serialized, prevents errors on the 
 *      firebase side.  
***************************************************************************/
        // serializeForUpdate(){
        //     const flashcard = {};
        //     if(this.imageName) flashcard.imageName = this.imageName;
        //     if(this.imageURL) flashcard.imageURL = this.imageURL;
        // }

        //validate(){
        //  const errors{};
            //NEED QUESTION
            //NEED INCORRECT ANSWER(S)
            //NEED CORRECT ANSWER
            //if(!this.name || this.name.length <2)
            //  errors.name= 'Product name is too short. Minimum 2 chars.'
            //....
            //else return errors
       // }
            
        //}
}
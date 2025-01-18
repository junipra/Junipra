import { ref } from 'vue';
import { defineStore } from 'pinia';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useContactStore = defineStore('contact', () => {
  
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const sending = ref(false);
    const error = ref(null);
    const success = ref(false);
  
    const submitToFirestore = async () => {
      sending.value = true;
      error.value = null;
      success.value = false;
    
      try {
        await addDoc(collection(db, "submissions"), {
          to: ["cambaffuto@icloud.com"], 
          message: {
            subject: `New Submission from ${name.value}`,
            text: `Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`, 
            html: `
              <p><strong>Name:</strong> ${name.value}</p>
              <p><strong>Email:</strong> ${email.value}</p>
              <p><strong>Message:</strong> ${message.value}</p>
            `, 
          },
          submittedAt: new Date().toISOString(), 
        });
    
        success.value = true;
        resetForm();
      } catch (err) {
        console.error("Error submitting message to Firestore:", err);
        error.value = "Failed to submit. Please try again.";
      } finally {
        sending.value = false;
      }
    };    

    const resetForm = () => {
        name.value = "";
        email.value = "";
        message.value = "";
    };
  
    return {
      name,
      email,
      message,
      sending,
      error,
      success,
      submitToFirestore,
      resetForm,
    };
  });

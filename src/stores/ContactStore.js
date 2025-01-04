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
          name: name.value,
          email: email.value,
          message: message.value,
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

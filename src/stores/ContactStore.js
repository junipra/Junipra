import { ref } from 'vue';
import { defineStore } from 'pinia';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useContactStore = defineStore('contact', () => {
  
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const sending = ref(false);
    const error = ref(null);
    const success = ref(false);
    const recipient = import.meta.env.VITE_CONTACT_RECIPIENT || "info@junipra.com";
  
    const submitToFirestore = async () => {
      sending.value = true;
      error.value = null;
      success.value = false;
    
      try {
        const trimmedName = name.value.trim();
        const trimmedEmail = email.value.trim();
        const trimmedMessage = message.value.trim();

        await addDoc(collection(db, "submissions"), {
          to: [recipient],
          message: {
            subject: `New Submission from ${trimmedName}`,
            text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nMessage: ${trimmedMessage}`, 
            html: `
              <p><strong>Name:</strong> ${trimmedName}</p>
              <p><strong>Email:</strong> ${trimmedEmail}</p>
              <p><strong>Message:</strong> ${trimmedMessage}</p>
            `, 
          },
          submittedAt: serverTimestamp(),
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

    const clearStatus = () => {
      error.value = null;
      success.value = false;
    };
  
    return {
      name,
      email,
      message,
      sending,
      error,
      success,
      clearStatus,
      submitToFirestore,
      resetForm,
    };
  });

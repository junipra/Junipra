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
    let successTimeout = null;
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
              <!doctype html>
                <html lang="und" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

                <head>
                  <title>New Junipra Message</title>
                  <!--[if !mso]><!-->
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <!--<![endif]-->
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <style type="text/css">
                    #outlook a {
                      padding: 0;
                    }

                    body {
                      margin: 0;
                      padding: 0;
                      -webkit-text-size-adjust: 100%;
                      -ms-text-size-adjust: 100%;
                    }

                    table,
                    td {
                      border-collapse: collapse;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                    }

                    img {
                      border: 0;
                      height: auto;
                      line-height: 100%;
                      outline: none;
                      text-decoration: none;
                      -ms-interpolation-mode: bicubic;
                    }

                    p {
                      display: block;
                      margin: 13px 0;
                    }
                  </style>
                  <!--[if mso]>
                    <noscript>
                    <xml>
                    <o:OfficeDocumentSettings>
                      <o:AllowPNG/>
                      <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                    </xml>
                    </noscript>
                    <![endif]-->
                  <!--[if lte mso 11]>
                    <style type="text/css">
                      .mj-outlook-group-fix { width:100% !important; }
                    </style>
                    <![endif]-->
                  <!--[if !mso]><!-->
                  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">
                  <style type="text/css">
                    @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
                  </style>
                  <!--<![endif]-->
                  <style type="text/css">
                    @media only screen and (min-width:480px) {
                      .mj-column-per-100 {
                        width: 100% !important;
                        max-width: 100%;
                      }
                    }
                  </style>
                  <style media="screen and (min-width:480px)">
                    .moz-text-html .mj-column-per-100 {
                      width: 100% !important;
                      max-width: 100%;
                    }
                  </style>
                  <style type="text/css">
                    @media only screen and (max-width:479px) {
                      table.mj-full-width-mobile {
                        width: 100% !important;
                      }

                      td.mj-full-width-mobile {
                        width: auto !important;
                      }
                    }
                  </style>
                </head>

                <body style="word-spacing:normal;background-color:#F0F0E0;">
                  <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">New contact form submission</div>
                  <div aria-label="New Junipra Message" aria-roledescription="email" class="bg" style="background-color: #F0F0E0;" role="article" lang="und" dir="auto">
                    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                    <div style="margin:0px auto;max-width:600px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                          <tr>
                            <td style="direction:ltr;font-size:0px;padding:24px 16px 0 16px;text-align:center;">
                              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="card-outlook" style="vertical-align:top;width:568px;" ><![endif]-->
                              <div class="mj-column-per-100 mj-outlook-group-fix card" style="background: #FAFAF2; border: 1px solid #DADAC8; border-radius: 20px; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                  <tbody>
                                    <tr>
                                      <td style="vertical-align:top;padding:20px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                          <tbody>
                                            <tr>
                                              <td align="left" style="font-size:0px;padding:0 0 14px 0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                  <tbody>
                                                    <tr>
                                                      <td style="width:120px;">
                                                        <img alt="Junipra" src="https://junipra.com/JunipraHD.PNG" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="120" height="auto">
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td align="left" class="heading" style="letter-spacing: .01em; color: #0B2430; font-size: 0px; padding: 0; word-break: break-word; font-family: Georgia,serif;">
                                                <div style="font-family:Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;font-size:20px;font-weight:700;line-height:1.6;text-align:left;color:#103040;">New contact submission</div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!--[if mso | IE]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                    <div style="margin:0px auto;max-width:600px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                          <tr>
                            <td style="direction:ltr;font-size:0px;padding:16px 16px 24px 16px;text-align:center;">
                              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="card-outlook" style="vertical-align:top;width:568px;" ><![endif]-->
                              <div class="mj-column-per-100 mj-outlook-group-fix card" style="background: #FAFAF2; border: 1px solid #DADAC8; border-radius: 20px; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                  <tbody>
                                    <tr>
                                      <td style="vertical-align:top;padding:20px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                          <tbody>
                                            <tr>
                                              <td align="left" class="label" style="font-weight: 700; color: #2B4A5A; text-transform: uppercase; letter-spacing: .06em; font-size: 0px; padding: 0 0 4px 0; word-break: break-word;">
                                                <div style="font-family:Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;font-size:15px;line-height:1.6;text-align:left;color:#103040;">Name</div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td align="left" style="font-size:0px;padding:0 0 14px 0;word-break:break-word;">
                                                <div style="font-family:Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;font-size:15px;line-height:1.6;text-align:left;color:#103040;">${trimmedName}</div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td align="left" class="label" style="font-weight: 700; color: #2B4A5A; text-transform: uppercase; letter-spacing: .06em; font-size: 0px; padding: 0 0 4px 0; word-break: break-word;">
                                                <div style="font-family:Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;font-size:15px;line-height:1.6;text-align:left;color:#103040;">Email</div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td align="left" style="font-size:0px;padding:0 0 14px 0;word-break:break-word;">
                                                <div style="font-family:Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;font-size:15px;line-height:1.6;text-align:left;color:#103040;"><a href="mailto:${trimmedEmail}" style="color: #2C5F7F; text-decoration: underline;">${trimmedEmail}</a></div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td align="left" class="label" style="font-weight: 700; color: #2B4A5A; text-transform: uppercase; letter-spacing: .06em; font-size: 0px; padding: 0 0 4px 0; word-break: break-word;">
                                                <div style="font-family:Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;font-size:15px;line-height:1.6;text-align:left;color:#103040;">Message</div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                                <div style="font-family:Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;font-size:15px;line-height:1.6;text-align:left;color:#103040;">${trimmedMessage}</div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <!--[if mso | IE]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </div>
                </body>
              </html>
            `, 
          },
          submittedAt: serverTimestamp(),
        });
    
        success.value = true;
       
        if (successTimeout) clearTimeout(successTimeout);
        successTimeout = setTimeout(() => {
          success.value = false;
          successTimeout = null;
        }, 5000);

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
      if (successTimeout) {
        clearTimeout(successTimeout);
        successTimeout = null;
      }
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

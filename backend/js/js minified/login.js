function seterror(e){$("#error-box").text(e).css({display:"unset"})}$("#fullname-box").on("focus",function(){$("#password-owner").removeClass("section-right-inputowner-active"),$("#email-owner").removeClass("section-right-inputowner-active"),$("#fullname-owner").toggleClass("section-right-inputowner-active")}),$("#email-box").on("focus",function(){$("#password-owner").removeClass("section-right-inputowner-active"),$("#fullname-owner").removeClass("section-right-inputowner-active"),$("#email-owner").toggleClass("section-right-inputowner-active")}),$("#password-box").on("focus",function(){$("#fullname-owner").removeClass("section-right-inputowner-active"),$("#email-owner").removeClass("section-right-inputowner-active"),$("#password-owner").toggleClass("section-right-inputowner-active")}),$("#button-login").on("click",function(){$("#error-box").text("").css({display:"none"});var e=$("#email-box").val(),r=$("#password-box").val(),t=!1;if(r.length<8&&(t=!0),e.length>5&&e.includes("@")&&e.includes(".")||(t=!0),t)seterror("invalid credentials");else{var n=$("#hidden-access-token").val();if(n.length>0){s='{"command":"check_credentials","access_token":"'+n+'","email":"'+e+'","password":"'+r+'"}';var o=new XMLHttpRequest;o.onerror=function(){seterror("unexpected error, try again")},o.open("POST","http://localhost/ExchangeWebsite/backend/auth.php?ref=login",!0),o.setRequestHeader("Content-Type","application-json"),o.onload=function(){if(4===o.readyState)if(o.responseText.includes("status")){var e=JSON.parse(o.responseText);e.status?window.location="main.php":seterror(e.error)}else seterror("unexpected error, try again")},o.send(s)}else{var s='{"command":"generate_access_token"}',a=new XMLHttpRequest;a.onerror=function(){seterror("unexpected error, try again")},a.open("POST","http://localhost/ExchangeWebsite/backend/auth.php?ref=login",!0),a.setRequestHeader("Content-Type","application-json"),a.send(s),a.onload=function(){if(4===a.readyState){var t=a.responseText;if(t.includes("status")){var n=JSON.parse(t);if(n.status){var o=n.token;$("#hidden-access-token").val(o),s='{"command":"check_credentials","access_token":"'+o+'","email":"'+e+'","password":"'+r+'"}';var i=new XMLHttpRequest;i.onerror=function(){seterror("unexpected error, try again")},i.open("POST","http://localhost/ExchangeWebsite/backend/auth.php?ref=login",!0),i.setRequestHeader("Content-Type","application-json"),i.onload=function(){if(4===i.readyState)if(i.responseText.includes("status")){var e=JSON.parse(i.responseText);e.status?window.location="main.php":seterror(e.error)}else seterror("unexpected error, try again")},i.send(s)}else seterror(n.error)}else seterror("unexpected error, try again")}}}}}),$("#button-signup").on("click",function(){if($("#error-box").text("").css({display:"none"}),$("#iaggree-check").is(":checked")){var e=$("#email-box").val(),r=$("#password-box").val(),t=!1;if(r.length<8&&(t=!0),e.length>5&&e.includes("@")&&e.includes(".")||(t=!0),t)seterror("invalid credentials");else{var n=$("#hidden-access-token").val();if(n.length>0){s=JSON.stringify({command:"create_user",access_token:n,email:e,password:r});var o=new XMLHttpRequest;o.onerror=function(){seterror("unexpected error, try again")},o.open("POST","http://localhost/ExchangeWebsite/backend/auth.php?ref=signup",!0),o.setRequestHeader("Content-Type","application-json"),o.onload=function(){if(4===o.readyState)if(o.responseText.includes("status")){var e=JSON.parse(o.responseText);e.status?window.location="login.php":seterror(e.error)}else seterror("unexpected error, try again")},o.send(s)}else{var s=JSON.stringify({command:"generate_access_token"}),a=new XMLHttpRequest;a.onerror=function(){seterror("unexpected error, try again")},a.open("POST","http://localhost/ExchangeWebsite/backend/auth.php?ref=signup",!0),a.setRequestHeader("Content-Type","application-json"),a.send(s),a.onload=function(){if(4===a.readyState){var t=a.responseText;if(t.includes("status")){var n=JSON.parse(t);if(n.status){var o=n.token;$("#hidden-access-token").val(o),s=JSON.stringify({command:"create_user",access_token:o,email:e,password:r});var i=new XMLHttpRequest;i.onerror=function(){seterror("unexpected error, try again")},i.open("POST","http://localhost/ExchangeWebsite/backend/auth.php?ref=signup",!0),i.setRequestHeader("Content-Type","application-json"),i.onload=function(){if(4===i.readyState)if(i.responseText.includes("status")){var e=JSON.parse(i.responseText);e.status?window.location="login.php":seterror(e.error)}else seterror("unexpected error, try again")},i.send(s)}else seterror(n.error)}else seterror("unexpected error, try again")}}}}}else alert("you must accept our terms and conditions")}),$("#button-change-pass").on("click",function(){var e=$("#password-box").val(),r=$("#password-confirm-box").val();if(e===r){var t=JSON.stringify({new_password:e,confirm_password:r,vrkey:$("#vr-key").val()}),n=new XMLHttpRequest;n.onerror=function(){seterror("unexpected error, try again")},n.open("POST","http://localhost/ExchangeWebsite/backend/tools.php?command=reset_change_password&main=true",!0),n.setRequestHeader("Content-Type","application-json"),n.onload=function(){if(4===n.readyState)if(n.responseText.includes("status")){var e=JSON.parse(n.responseText);e.status?(alert("your password has been changed, please relogin now"),window.location="http://localhost/ExchangeWebsite/backend/login.php"):seterror(e.error)}else seterror("unexpected error, try again")},n.send(t)}else alert("invalid confirm password")}),$("#button-send-recovery").on("click",function(){$("#error-box").text("").css({display:"none"});var e=$("#email-box").val(),r=!1;if(e.length>5&&e.includes("@")&&e.includes(".")||(r=!0),r)seterror("invalid email");else{var t=JSON.stringify({email:e}),n=new XMLHttpRequest;n.onerror=function(){seterror("unexpected error, try again")},n.open("POST","http://localhost/ExchangeWebsite/backend/tools.php?command=reset_password&main=true",!0),n.setRequestHeader("Content-Type","application-json"),n.onload=function(){if(4===n.readyState)if(n.responseText.includes("status")){var e=JSON.parse(n.responseText);e.status?alert("link has been sent"):seterror(e.error)}else seterror("unexpected error, try again")},n.send(t)}});
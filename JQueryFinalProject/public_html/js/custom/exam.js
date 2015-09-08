/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Your code here. Please do not introduce any global variables
	// Do not use an DOM properties or functions (e.g., innerHTML, getElementById)
            
            jQuery(document).ready(function() {
                var exam = [
                    "<p># I have modified the constructor function Foo of demoNew.html to take two parameters and use those parameters to initialize this.a and this.b</p>\n\n<p>The _new function no longer works because it assume that the constructor function has no parameters. Modify _new so it can pass parameters to the constructor function.</p>\n",
                    "<p># What happens if you comment out line 10 (this.length=0) of jquery-0.1.js?</p>\n",
                    "<p># Put a breakpoint at line 46 of jquery-0.4.js.</p>\n<ol type='a'>\n<li>What is the value of 'this' here?</li>\n<li>Why does it have that value?</li>\n</ol>\n",
                    "<p># Add a mouseup prototype function to jquery0.4.js. List the changes you had to make below.</p>\n",
                    "<p># The ability of JavaScript to add new properties to system objects (e.g. adding an events property to a\nDOM element as was done in jquery-0.4.js) has inspired me to make this exam dynamically updateable. </p>\n\n<p>Please add a question in the area below and provide its answer.</p>\n",
                    "<p># Put a breakpoint at line 56 of jquery-0.5.js. Add some code to demoAttr.html that will cause that\nbreakpoint to be hit.</p>\n",
                    "<p># Add an html method to jQuery.prototype in jquery-0.1.js. It is called as follows:</p>\n<pre>\nel = $('.someclass');\nel.html('<b>hello</b>');	// will set the innerHTML of each DOM element selected to '<b>hello</b>'\n</pre>\n",
                    "<p># Put a breakpoint at line 27 jquery-0.3.js. What does this line do?</p>\n",
                    "<p># This code crashes in demoClick.html</p>\n<pre>\nvar obj = $('.clickable');\nobj.click(foo).click(foo);\nPlease fix the problem.\n</pre>\n"
                ];
                jQuery.each(exam,function(index, value){
                    // document.write(value);
                    var temp = jQuery("<div>");
                    temp.addClass("question");
                    temp.attr("id",index);
                    index = index + 1;
//                    jQuery(temp).prepend("Question "+index);
//                    temp.prepend("Question"+index);
                    value = value.replace('#','<b>Question-'+index+'</b><br/>');
                    temp.html(value);
                    jQuery('#test').append(temp);
                    
                    
                    var answer = $("<textarea>");
                    answer.attr("id","answer"+index);
                    answer.addClass("anwer");
                    answer.attr("rows","8");
                    answer.attr("cols","80");
                    
                    jQuery('#test').append(answer);
//                    document.write(temp.text());
//                    document.write(answer.);

                    jQuery(function () {
                        var editor = document.querySelector("#answer"+index);
                        if (window.localStorage["answer"+index]) {
                         editor.value = window.localStorage["answer"+index];
                        }
                    });
                    
                    jQuery(function() {
                        var editor = document.querySelector("#answer"+index);
                        editor.addEventListener("keyup", function() {
                         window.localStorage["answer"+index] = editor.value;
                        });
                    });
                    
                });
                jQuery('#test').append("<br><br><br>");
                jQuery(function(){
                    var r= $('<input id="sendmailbtn" type="button" value="Submit>>"/>');
                    jQuery('#test').append(r);
                });
                jQuery('#test').append("<br><br><br>");
                
                jQuery(function(){
                    jQuery("#sendmailbtn").click(function() {
//                      alert( "Handler for .click() called." );
                        var answers =  []; 
                        jQuery.each(exam,function(index, value){
                            index = index + 1;
                            var answer = "[[["+window.localStorage["answer"+index]+"]]]";
                            answers.push(answer+'\r\n');
                            answers.push('<br>');
                         });
                        // document.write(answers.toString());  
                        window.location = "https://mail.google.com/mail/?format=html&view=cm&fs=1&to=janardhanbonu@gmail.com&su=jQuery Final exam submission&body="+answers.toString();
                        // alert(answers.toString());
                    });
                });
                
            });
            d
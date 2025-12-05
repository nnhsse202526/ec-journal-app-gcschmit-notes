/**
 * contains client-side Javascript functions
 *  (primarily event handlers to fetch data from Node server)
 */

const submitButton = document.querySelector("input.submit");
submitButton.addEventListener("click", () => {
  const date = document.querySelector("input.date").value;
  const employabilityCompetency = document.querySelector("input.EC").value;
  const content = document.querySelector("textarea.content").value;

  console.log(date + "; " + employabilityCompetency + "; " + content);

  // for now, redirect to the home page
  window.location = "/";
});

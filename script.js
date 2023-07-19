<script>
    function calculateCGPA() {
      // Retrieve input values
      var ecEndsem = parseInt(document.getElementById("ecEndsem").value);
      var ecCAE = parseInt(document.getElementById("ecCAE").value);
      var ecInternals = parseInt(document.getElementById("ecInternals").value);
      var mdcEndsem = parseInt(document.getElementById("mdcEndsem").value);
      var mdcCAE = parseInt(document.getElementById("mdcCAE").value);
      var mdcInternals = parseInt(document.getElementById("mdcInternals").value);
      var cmsEndsem = parseInt(document.getElementById("cmsEndsem").value);
      var cmsCAE = parseInt(document.getElementById("cmsCAE").value);
      var cmsInternals = parseInt(document.getElementById("cmsInternals").value);
      var lasEndsem = parseInt(document.getElementById("lasEndsem").value);
      var lasCAE = parseInt(document.getElementById("lasCAE").value);
      var lasInternals = parseInt(document.getElementById("lasInternals").value);
      var icdeEndsem = parseInt(document.getElementById("icdeEndsem").value);
      var icdeCAE = parseInt(document.getElementById("icdeCAE").value);
      var icdeInternals = parseInt(document.getElementById("icdeInternals").value);
      var ecPractical = parseInt(document.getElementById("ecPractical").value);
      var mdcPractical = parseInt(document.getElementById("mdcPractical").value);
      var cmsPractical = parseInt(document.getElementById("cmsPractical").value);
      var ppsPractical = parseInt(document.getElementById("ppsPractical").value);
      var iotPractical = parseInt(document.getElementById("iotPractical").value);
      var foreignLanguagePractical = parseInt(document.getElementById("foreignLanguagePractical").value);
var iddcPractical = parseInt(document.getElementById("foreignLanguagePractical").value);

      // RULES
      if (
        ecEndsem > 50 ||
        ecCAE > 15 ||
        ecInternals > 10 ||
        mdcEndsem > 50 ||
        mdcCAE > 15 ||
        mdcInternals > 10 ||
        cmsEndsem > 50 ||
        cmsCAE > 15 ||
        cmsInternals > 10 ||
        lasEndsem > 50 ||
        lasCAE > 15 ||
        lasInternals > 10 ||
        icdeEndsem > 50 ||
        icdeCAE > 15 ||
        icdeInternals > 10 ||
        ecPractical > 25 ||
        mdcPractical > 25 ||
        cmsPractical > 25 ||
        ppsPractical > 50 ||
        iotPractical > 25 ||
        foreignLanguagePractical > 25 ||
        iddcPractical > 25
      ) {
        alert("Please enter valid scores within the specified range.");
        return;
      }

      // Calculate grade points for each subject
      var ecEndsemGradePoints = (((ecEndsem + ecInternals + ecCAE) / 75) * 10);
      var ecPracticalGradePoints = ((ecPractical / 25) * 10);
      var mdcEndsemGradePoints = (((mdcEndsem + mdcInternals + mdcCAE) / 75) * 10);
      var mdcPracticalGradePoints = ((mdcPractical / 25) * 10);
      var cmsPracticalGradePoints = ((cmsPractical / 25) * 10);
      var cmsEndsemGradePoints = (((cmsEndsem + cmsInternals + cmsCAE) / 75) * 10);
      var ppsPracticalGradePoints = ((ppsPractical / 50) * 10);
      var foreignLanguagePracticalGradePoints = ((foreignLanguagePractical / 25) * 10);
      var iotPracticalGradePoints = ((iotPractical / 25) * 10);
      var lasEndsemGradePoints = (((lasEndsem + lasInternals + lasCAE) / 75) * 10);
      var icdeEndsemGradePoints = (((icdeEndsem + icdeInternals + icdeCAE) / 75) * 10);
iddcPracticalGradePoints= ((iddcPractical / 25) * 10);

      // Calculate total grade points
      var totalGradePoints =
        (ecEndsemGradePoints * 2) +
        (ecPracticalGradePoints * 1) +
        (mdcEndsemGradePoints * 2) +
        (mdcPracticalGradePoints * 1) +
        (cmsPracticalGradePoints * 1) +
        (cmsEndsemGradePoints * 1) +
        (ppsPracticalGradePoints * 2) +
        (foreignLanguagePracticalGradePoints * 1) +
        (iotPracticalGradePoints * 1) +
        (lasEndsemGradePoints * 3) +
        (icdeEndsemGradePoints * 2)+(iddcPracticalGradePoints*1);

      // Calculate total credit hours
      var totalCreditHours = 18;

      // CGPA
      var cgpa = totalGradePoints / totalCreditHours;

      var resultElement = document.getElementById("result");
      resultElement.innerHTML = "SGPA: <span>" + cgpa.toFixed(2) + "</span>";
    }
  </script>
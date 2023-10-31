document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calcular_promedio");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtiene los valores ingresados por el usuario
        const nombre = document.getElementById("nombre").value;
        const asignatura = document.getElementById("asignatura").value;
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);
        const nota3 = parseFloat(document.getElementById("nota3").value);
        const nota4 = parseFloat(document.getElementById("nota4").value);
        const nota5 = parseFloat(document.getElementById("nota5").value);
        const nota6 = parseFloat(document.getElementById("nota6").value);

        const nombreField = document.getElementById("nombre");
        if (!nombre) {
            nombreField.classList.remove("is-valid");
            nombreField.classList.add("is-invalid");
        } else {
            nombreField.classList.remove("is-invalid");
            nombreField.classList.add("is-valid");
        }


        // Valida el campo de asignatura
        const asignaturaField = document.getElementById("asignatura");
        if (!asignatura) {
            asignaturaField.classList.remove("is-valid");
            asignaturaField.classList.add("is-invalid");
        } else {
            asignaturaField.classList.remove("is-invalid");
            asignaturaField.classList.add("is-valid");
        }

        //Validacion de campos
        if (!nombre || !asignatura || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5) || isNaN(nota6)) {
            alert("ERROR. Revise los datos del formulario.");
            return;
        }

        // Valida los campos de notas
        for (let i = 0; i < notas.length; i++) {
            const notaField = document.getElementById(notaIds[i]);
            if (isNaN(notas[i])) {
                notaField.classList.remove("is-valid");
                notaField.classList.add("is-invalid");
            } else {
                notaField.classList.remove("is-invalid");
                notaField.classList.add("is-valid");
            }
        }

        // Verifica si hay algún campo con clase "is-invalid"
        if (form.querySelector(".is-invalid")) {
            alert("ERROR. Revise los datos del formulario.");
            return;
        }

        // Calcula la ponderación
        const ponderacion1 = nota1 * 0.12;
        const ponderacion2 = nota2 * 0.21;
        const ponderacion3 = nota3 * 0.12;
        const ponderacion4 = nota4 * 0.21;
        const ponderacion5 = nota5 * 0.13;
        const ponderacion6 = nota6 * 0.21;

        // Calcula el promedio final
        const promedioFinal = (ponderacion1 + ponderacion2 + ponderacion3 + ponderacion4 + ponderacion5 + ponderacion6).toFixed(1);

        // Muestra el resultado
        const caja_final = document.getElementById("caja_final");
        caja_final.style.display = "block";

        document.getElementById("informe_nombre").textContent = nombre;
        document.getElementById("informe_asignatura").textContent = asignatura;
        document.getElementById("resultado_nota1").textContent = nota1;
        document.getElementById("resultado_ponderacion1").textContent = ponderacion1.toFixed(1);
        document.getElementById("resultado_nota2").textContent = nota2;
        document.getElementById("resultado_ponderacion2").textContent = ponderacion2.toFixed(1);
        document.getElementById("resultado_nota3").textContent = nota3;
        document.getElementById("resultado_ponderacion3").textContent = ponderacion3.toFixed(1);
        document.getElementById("resultado_nota4").textContent = nota4;
        document.getElementById("resultado_ponderacion4").textContent = ponderacion4.toFixed(1);
        document.getElementById("resultado_nota5").textContent = nota5;
        document.getElementById("resultado_ponderacion5").textContent = ponderacion5.toFixed(1);
        document.getElementById("resultado_nota6").textContent = nota6;
        document.getElementById("resultado_ponderacion6").textContent = ponderacion6.toFixed(1);
        document.getElementById("promedio_final").textContent = promedioFinal;

        // Comprueba si el estudiante aprobó
        if (promedioFinal >= 4.0) {
            document.getElementById("mensaje_final").textContent = "¡Has aprobado la asignatura!";
        } else {
            document.getElementById("mensaje_final").textContent = "Lo siento, no has aprobado la asignatura :(.";
        }

        alert("OK. Campos validados.");
    });
});
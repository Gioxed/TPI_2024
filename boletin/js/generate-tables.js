
        function generateTablesForTab(tabId, count) {
            const container = document.getElementById(tabId);
            container.innerHTML = ''; // Clear the container

            
            for (let i = 1; i <= count; i++) {
                const tableHTML = `
                    <div class="table-container">
                        <table border="0" cellpadding="0" cellspacing="0" class="sheet gridlines">
                <tbody>
                    <tr class="row0">
                        <td class="column0 style1 s">Apellido y Nombre:</td>
                        <td class="column1 style2 s" colspan="5">
                            <select name="dni_alumno" id="dni_alumno_${i}" required>
                            <option value="">Seleccione un alumno</option>
                            <!-- Opciones cargadas dinámicamente desde la base de datos -->
                            </select>
                        </td>
                        <td class="column6 style3 s">Tabla:</td>
                        <td class="column2 style5 s" colspan="7">${i}</td>
                    </tr>
                    <tr class="row1">
                        <td class="column0 style4 s" colspan="2">Ciclo Superior de la ESO</td>
                        <td class="column2 style5 s">Matemática</td>
                        <td class="column3 style5 s">Inglés técnico</td>
                        <td class="column4 style5 s">Marco jurídico y derechos del trabajo</td>
                        <td class="column5 style5 s">TÉCNICA: Asistencia 2</td>
                        <td class="column6 style5 s">TÉCNICA: Autogestión</td>
                        <td class="column7 style5 s">TÉCNICA: Hardware 4</td>
                        <td class="column8 style5 s">TÉCNICA: Prácticas Profesionalizantes 2</td>
                        <td class="column9 style5 s">TÉCNICA: Programación</td>
                        <td class="column10 style5 s">TÉCNICA: Redes 3</td>
                        <td class="column11 style5 s">EDI: Arduino 3</td>
                    </tr>
                    
                    <tr class="row2">
                    <td class="column0 style6 s" rowspan="3">1° Cuatrimestre</td>
                    <td class="column1 style7 s">1° Informe</td>
                    <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_1_1" id="matematica_1_1"></td>
                    <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_1_1" id="ingles_1_1"></td>
                    <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_1_1" id="juridico_1_1"></td>
                    <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_1_1" id="asistencia_1_1"></td>
                    <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_1_1" id="autogestion_1_1"></td>
                    <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_1_1" id="hardware_1_1"></td>
                    <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_1_1" id="practicas_1_1"></td>
                    <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_1_1" id="programacion_1_1"></td>
                    <td class="column10 style8"><input min="0" max="10" type="number" name="redes_1_1" id="redes_1_1"></td>
                    <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_1_1" id="arduino_1_1"></td>
                    </tr>

                    <tr>
                    <td class="column1 style7 s">2° Informe</td>
                    <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_1_2" id="matematica_1_2"></td>
                    <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_1_2" id="ingles_1_2"></td>
                    <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_1_2" id="juridico_1_2"></td>
                    <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_1_2" id="asistencia_1_2"></td>
                    <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_1_2" id="autogestion_1_2"></td>
                    <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_1_2" id="hardware_1_2"></td>
                    <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_1_2" id="practicas_1_2"></td>
                    <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_1_2" id="programacion_1_2"></td>
                    <td class="column10 style8"><input min="0" max="10" type="number" name="redes_1_2" id="redes_1_2"></td>
                    <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_1_2" id="arduino_1_2"></td>
                    </tr>
                    
                    <tr>
                    <td class="column1 style7 s">NOTA</td>
                    <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_1_final" id="matematica_1_final"></td>
                    <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_1_final" id="ingles_1_final"></td>
                    <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_1_final" id="juridico_1_final"></td>
                    <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_1_final" id="asistencia_1_final"></td>
                    <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_1_final" id="autogestion_1_final"></td>
                    <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_1_final" id="hardware_1_final"></td>
                    <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_1_final" id="practicas_1_final"></td>
                    <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_1_final" id="programacion_1_final"></td>
                    <td class="column10 style8"><input min="0" max="10" type="number" name="redes_1_final" id="redes_1_final"></td>
                    <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_1_final" id="arduino_1_final"></td>
                    </tr>
<!-- 2° Cuatrimestre -->
                    <tr class="row2">
                    <td class="column0 style6 s" rowspan="3">2° Cuatrimestre</td>
                    <td class="column1 style7 s">1° Informe</td>
                    <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_2_1" id="matematica_2_1"></td>
                    <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_2_1" id="ingles_2_1"></td>
                    <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_2_1" id="juridico_2_1"></td>
                    <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_2_1" id="asistencia_2_1"></td>
                    <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_2_1" id="autogestion_2_1"></td>
                    <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_2_1" id="hardware_2_1"></td>
                    <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_2_1" id="practicas_2_1"></td>
                    <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_2_1" id="programacion_2_1"></td>
                    <td class="column10 style8"><input min="0" max="10" type="number" name="redes_2_1" id="redes_2_1"></td>
                    <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_2_1" id="arduino_2_1"></td>
                    </tr>
                    
                    <tr>
                    <td class="column1 style7 s">2° Informe</td>
                    <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_2_2" id="matematica_2_2"></td>
                    <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_2_2" id="ingles_2_2"></td>
                    <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_2_2" id="juridico_2_2"></td>
                    <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_2_2" id="asistencia_2_2"></td>
                    <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_2_2" id="autogestion_2_2"></td>
                    <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_2_2" id="hardware_2_2"></td>
                    <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_2_2" id="practicas_2_2"></td>
                    <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_2_2" id="programacion_2_2"></td>
                    <td class="column10 style8"><input min="0" max="10" type="number" name="redes_2_2" id="redes_2_2"></td>
                    <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_2_2" id="arduino_2_2"></td>
                    </tr>
                    <tr>
                    <td class="column1 style7 s">NOTA</td>
                    <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_2_final" id="matematica_2_final"></td>
                    <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_2_final" id="ingles_2_final"></td>
                    <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_2_final" id="juridico_2_final"></td>
                    <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_2_final" id="asistencia_2_final"></td>
                    <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_2_final" id="autogestion_2_final"></td>
                    <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_2_final" id="hardware_2_final"></td>
                    <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_2_final" id="practicas_2_final"></td>
                    <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_2_final" id="programacion_2_final"></td>
                    <td class="column10 style8"><input min="0" max="10" type="number" name="redes_2_final" id="redes_2_final"></td>
                    <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_2_final" id="arduino_2_final"></td>
                    </tr>
            
                    <tr>
    <td class="column0 style7 s" colspan="2">Nota Anual</td>
    <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_anual" id="matematica_anual"></td>
    <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_anual" id="ingles_anual"></td>
    <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_anual" id="juridico_anual"></td>
    <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_anual" id="asistencia_anual"></td>
    <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_anual" id="autogestion_anual"></td>
    <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_anual" id="hardware_anual"></td>
    <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_anual" id="practicas_anual"></td>
    <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_anual" id="programacion_anual"></td>
    <td class="column10 style8"><input min="0" max="10" type="number" name="redes_anual" id="redes_anual"></td>
    <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_anual" id="arduino_anual"></td>
</tr>
<tr>
    <td class="column0 style7 s" colspan="2">Rec Dic</td>
    <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_rec_dic" id="matematica_rec_dic"></td>
    <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_rec_dic" id="ingles_rec_dic"></td>
    <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_rec_dic" id="juridico_rec_dic"></td>
    <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_rec_dic" id="asistencia_rec_dic"></td>
    <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_rec_dic" id="autogestion_rec_dic"></td>
    <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_rec_dic" id="hardware_rec_dic"></td>
    <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_rec_dic" id="practicas_rec_dic"></td>
    <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_rec_dic" id="programacion_rec_dic"></td>
    <td class="column10 style8"><input min="0" max="10" type="number" name="redes_rec_dic" id="redes_rec_dic"></td>
    <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_rec_dic" id="arduino_rec_dic"></td>
</tr>
<tr>
    <td class="column0 style7 s" colspan="2">Rec Feb</td>
    <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_rec_feb" id="matematica_rec_feb"></td>
    <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_rec_feb" id="ingles_rec_feb"></td>
    <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_rec_feb" id="juridico_rec_feb"></td>
    <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_rec_feb" id="asistencia_rec_feb"></td>
    <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_rec_feb" id="autogestion_rec_feb"></td>
    <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_rec_feb" id="hardware_rec_feb"></td>
    <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_rec_feb" id="practicas_rec_feb"></td>
    <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_rec_feb" id="programacion_rec_feb"></td>
    <td class="column10 style8"><input min="0" max="10" type="number" name="redes_rec_feb" id="redes_rec_feb"></td>
    <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_rec_feb" id="arduino_rec_feb"></td>
</tr>
<tr>
    <td class="column0 style7 s" colspan="2">Nota Final</td>
    <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_final" id="matematica_final"></td>
    <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_final" id="ingles_final"></td>
    <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_final" id="juridico_final"></td>
    <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_final" id="asistencia_final"></td>
    <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_final" id="autogestion_final"></td>
    <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_final" id="hardware_final"></td>
    <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_final" id="practicas_final"></td>
    <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_final" id="programacion_final"></td>
    <td class="column10 style8"><input min="0" max="10" type="number" name="redes_final" id="redes_final"></td>
    <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_final" id="arduino_final"></td>
</tr>

                </tbody>
            </table>
            <button type="button" class="save-button" onclick="saveTable(${i})">Guardar</button> <!-- Botón de Guardar -->

                    </div>
                `;
                container.innerHTML += tableHTML;
            }
            
            
        }


        
        
        
        
        
        window.onload = function() {
            const dni_alumno = getDniFromUrl();  // Función que obtiene el DNI del alumno desde la URL o de otro lugar
        
            // Recuperar los datos del localStorage con el DNI seleccionado
            const savedData = localStorage.getItem(`notas_${dni_alumno}`);
            if (savedData) {
                const formData = JSON.parse(savedData);
        
                // Rellenar los campos con los datos recuperados
                Object.keys(formData).forEach(key => {
                    if (key !== 'dni_alumno') {
                        const input = document.querySelector(`input[name="${key}"]`);
                        if (input) {
                            input.value = formData[key];
                        }
                    }
                });
            }
        };

        
        
        // Función para obtener el DNI del alumno desde la URL (puedes modificarlo según tu caso)
        function getDniFromUrl() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('dni');  // Asumiendo que el DNI está en la URL como ?dni=12345678
        }
        
        

        function showTab(tabId) {
            // Hide all tabs and remove 'active' class from all buttons
            const tabs = document.querySelectorAll('.tabcontent');
            tabs.forEach(tab => tab.classList.remove('active'));

            const buttons = document.querySelectorAll('.tablink');
            buttons.forEach(button => button.classList.remove('active'));

            // Show the selected tab and add 'active' class to the clicked button
            document.getElementById(tabId).classList.add('active');
            document.querySelector(`.tablink[onclick="showTab('${tabId}')"]`).classList.add('active');
        }

        // Initial setup
        generateTablesForTab('tab1', 5); // 7mo 1ra
        generateTablesForTab('tab2', 5); // 7mo 2da
        generateTablesForTab('tab3', 5); // 7mo 3ra

        // Show the first tab by default
        showTab('tab1');

    
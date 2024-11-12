
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
                    ${['1', '2'].map(cuatrimestre => `
                        <tr class="row2">
                            <td class="column0 style6 s" rowspan="3">${cuatrimestre}° Cuatrimestre</td>
                            <td class="column1 style7 s">1° Informe</td>
                            <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_${cuatrimestre}_1" id="matematica_${cuatrimestre}_1"></td>
                            <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_${cuatrimestre}_1" id="ingles_${cuatrimestre}_1"></td>
                            <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_${cuatrimestre}_1" id="juridico_${cuatrimestre}_1"></td>
                            <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_${cuatrimestre}_1" id="asistencia_${cuatrimestre}_1"></td>
                            <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_${cuatrimestre}_1" id="autogestion_${cuatrimestre}_1"></td>
                            <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_${cuatrimestre}_1" id="hardware_${cuatrimestre}_1"></td>
                            <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_${cuatrimestre}_1" id="practicas_${cuatrimestre}_1"></td>
                            <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_${cuatrimestre}_1" id="programacion_${cuatrimestre}_1"></td>
                            <td class="column10 style8"><input min="0" max="10" type="number" name="redes_${cuatrimestre}_1" id="redes_${cuatrimestre}_1"></td>
                            <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_${cuatrimestre}_1" id="arduino_${cuatrimestre}_1"></td>
                        </tr>
                        <tr>
                            <td class="column1 style7 s">2° Informe</td>
                            <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_${cuatrimestre}_2" id="matematica_${cuatrimestre}_2"></td>
                            <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_${cuatrimestre}_2" id="ingles_${cuatrimestre}_2"></td>
                            <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_${cuatrimestre}_2" id="juridico_${cuatrimestre}_2"></td>
                            <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_${cuatrimestre}_2" id="asistencia_${cuatrimestre}_2"></td>
                            <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_${cuatrimestre}_2" id="autogestion_${cuatrimestre}_2"></td>
                            <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_${cuatrimestre}_2" id="hardware_${cuatrimestre}_2"></td>
                            <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_${cuatrimestre}_2" id="practicas_${cuatrimestre}_2"></td>
                            <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_${cuatrimestre}_2" id="programacion_${cuatrimestre}_2"></td>
                            <td class="column10 style8"><input min="0" max="10" type="number" name="redes_${cuatrimestre}_2" id="redes_${cuatrimestre}_2"></td>
                            <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_${cuatrimestre}_2" id="arduino_${cuatrimestre}_2"></td>
                        </tr>
                        <tr>
                            <td class="column1 style7 s">NOTA</td>
                            <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_${cuatrimestre}_final" id="matematica_${cuatrimestre}_final"></td>
                            <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_${cuatrimestre}_final" id="ingles_${cuatrimestre}_final"></td>
                            <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_${cuatrimestre}_final" id="juridico_${cuatrimestre}_final"></td>
                            <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_${cuatrimestre}_final" id="asistencia_${cuatrimestre}_final"></td>
                            <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_${cuatrimestre}_final" id="autogestion_${cuatrimestre}_final"></td>
                            <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_${cuatrimestre}_final" id="hardware_${cuatrimestre}_final"></td>
                            <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_${cuatrimestre}_final" id="practicas_${cuatrimestre}_final"></td>
                            <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_${cuatrimestre}_final" id="programacion_${cuatrimestre}_final"></td>
                            <td class="column10 style8"><input min="0" max="10" type="number" name="redes_${cuatrimestre}_final" id="redes_${cuatrimestre}_final"></td>
                            <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_${cuatrimestre}_final" id="arduino_${cuatrimestre}_final"></td>
                        </tr>
                    `).join('')}
                    ${['anual', 'rec_dic', 'rec_feb', 'final'].map(tipo => `
                        <tr>
                            <td class="column0 style7 s" colspan="2">${tipo === 'anual' ? 'Nota Anual' : tipo === 'rec_dic' ? 'Rec Dic' : tipo === 'rec_feb' ? 'Rec Feb' : 'Nota Final'}</td>
                            <td class="column2 style8"><input min="0" max="10" type="number" name="matematica_${tipo}" id="matematica_${tipo}"></td>
                            <td class="column3 style8"><input min="0" max="10" type="number" name="ingles_${tipo}" id="ingles_${tipo}"></td>
                            <td class="column4 style8"><input min="0" max="10" type="number" name="juridico_${tipo}" id="juridico_${tipo}"></td>
                            <td class="column5 style8"><input min="0" max="10" type="number" name="asistencia_${tipo}" id="asistencia_${tipo}"></td>
                            <td class="column6 style8"><input min="0" max="10" type="number" name="autogestion_${tipo}" id="autogestion_${tipo}"></td>
                            <td class="column7 style8"><input min="0" max="10" type="number" name="hardware_${tipo}" id="hardware_${tipo}"></td>
                            <td class="column8 style8"><input min="0" max="10" type="number" name="practicas_${tipo}" id="practicas_${tipo}"></td>
                            <td class="column9 style8"><input min="0" max="10" type="number" name="programacion_${tipo}" id="programacion_${tipo}"></td>
                            <td class="column10 style8"><input min="0" max="10" type="number" name="redes_${tipo}" id="redes_${tipo}"></td>
                            <td class="column11 style8"><input min="0" max="10" type="number" name="arduino_${tipo}" id="arduino_${tipo}"></td>
                        </tr>
                    `).join('')}
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

    
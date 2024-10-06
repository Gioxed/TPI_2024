
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
                            <input type="text" name="nombre" value="nombre, ejemplo">
                        </td>
                        <td class="column6 style3 s">Curso:</td>
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
                            <td class="column2 style8"><input type="text" name="matematica_${cuatrimestre}_1"></td>
                            <td class="column3 style8"><input type="text" name="ingles_${cuatrimestre}_1"></td>
                            <td class="column4 style8"><input type="text" name="marco_${cuatrimestre}_1"></td>
                            <td class="column5 style8"><input type="text" name="tecnica_asistencia_${cuatrimestre}_1"></td>
                            <td class="column6 style8"><input type="text" name="tecnica_autogestion_${cuatrimestre}_1"></td>
                            <td class="column7 style8"><input type="text" name="tecnica_hardware_${cuatrimestre}_1"></td>
                            <td class="column8 style8"><input type="text" name="tecnica_practicas_${cuatrimestre}_1"></td>
                            <td class="column9 style8"><input type="text" name="tecnica_programacion_${cuatrimestre}_1"></td>
                            <td class="column10 style8"><input type="text" name="tecnica_redes_${cuatrimestre}_1"></td>
                            <td class="column11 style8"><input type="text" name="edi_arduino_${cuatrimestre}_1"></td>
                        </tr>
                        <tr>
                            <td class="column1 style7 s">2° Informe</td>
                            <td class="column2 style8"><input type="text" name="matematica_${cuatrimestre}_2"></td>
                            <td class="column3 style8"><input type="text" name="ingles_${cuatrimestre}_2"></td>
                            <td class="column4 style8"><input type="text" name="marco_${cuatrimestre}_2"></td>
                            <td class="column5 style8"><input type="text" name="tecnica_asistencia_${cuatrimestre}_2"></td>
                            <td class="column6 style8"><input type="text" name="tecnica_autogestion_${cuatrimestre}_2"></td>
                            <td class="column7 style8"><input type="text" name="tecnica_hardware_${cuatrimestre}_2"></td>
                            <td class="column8 style8"><input type="text" name="tecnica_practicas_${cuatrimestre}_2"></td>
                            <td class="column9 style8"><input type="text" name="tecnica_programacion_${cuatrimestre}_2"></td>
                            <td class="column10 style8"><input type="text" name="tecnica_redes_${cuatrimestre}_2"></td>
                            <td class="column11 style8"><input type="text" name="edi_arduino_${cuatrimestre}_2"></td>
                        </tr>
                        <tr>
                            <td class="column1 style7 s">NOTA</td>
                            <td class="column2 style8"><input type="text" name="matematica_${cuatrimestre}_nota"></td>
                            <td class="column3 style8"><input type="text" name="ingles_${cuatrimestre}_nota"></td>
                            <td class="column4 style8"><input type="text" name="marco_${cuatrimestre}_nota"></td>
                            <td class="column5 style8"><input type="text" name="tecnica_asistencia_${cuatrimestre}_nota"></td>
                            <td class="column6 style8"><input type="text" name="tecnica_autogestion_${cuatrimestre}_nota"></td>
                            <td class="column7 style8"><input type="text" name="tecnica_hardware_${cuatrimestre}_nota"></td>
                            <td class="column8 style8"><input type="text" name="tecnica_practicas_${cuatrimestre}_nota"></td>
                            <td class="column9 style8"><input type="text" name="tecnica_programacion_${cuatrimestre}_nota"></td>
                            <td class="column10 style8"><input type="text" name="tecnica_redes_${cuatrimestre}_nota"></td>
                            <td class="column11 style8"><input type="text" name="edi_arduino_${cuatrimestre}_nota"></td>
                        </tr>
                    `).join('')}
                    ${['anual', 'rec_dic', 'rec_feb', 'nota_final'].map(tipo => `
                        <tr>
                            <td class="column0 style7 s" colspan="2">${tipo === 'anual' ? 'Nota Anual' : tipo === 'rec_dic' ? 'Rec Dic' : tipo === 'rec_feb' ? 'Rec Feb' : 'Nota Final'}</td>
                            <td class="column2 style8"><input type="text" name="matematica_${tipo}"></td>
                            <td class="column3 style8"><input type="text" name="ingles_${tipo}"></td>
                            <td class="column4 style8"><input type="text" name="marco_${tipo}"></td>
                            <td class="column5 style8"><input type="text" name="tecnica_asistencia_${tipo}"></td>
                            <td class="column6 style8"><input type="text" name="tecnica_autogestion_${tipo}"></td>
                            <td class="column7 style8"><input type="text" name="tecnica_hardware_${tipo}"></td>
                            <td class="column8 style8"><input type="text" name="tecnica_practicas_${tipo}"></td>
                            <td class="column9 style8"><input type="text" name="tecnica_programacion_${tipo}"></td>
                            <td class="column10 style8"><input type="text" name="tecnica_redes_${tipo}"></td>
                            <td class="column11 style8"><input type="text" name="edi_arduino_${tipo}"></td>
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

        function saveTable(tableId) {
            // Lógica para guardar la tabla
            alert(`Guardando datos de la tabla ${tableId}`);
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
        generateTablesForTab('tab1', 25); // 7mo 1ra
        generateTablesForTab('tab2', 25); // 7mo 2da
        generateTablesForTab('tab3', 25); // 7mo 3ra

        // Show the first tab by default
        showTab('tab1');

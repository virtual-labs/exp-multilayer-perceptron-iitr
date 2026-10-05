1. Click on **DEMO** tab to learn the steps, then go back to the **CREATE** tab to perform the experiment.
2. Click on **CREATE** tab.
3. Enter the target value for the XOR gate in the table, then click the **SUBMIT** button.
4. Navigate to the **COMPUTE** tab in the header and click on it.
5. Initiate the process by clicking the **GENERATE WEIGHTS** button to initialize weight values.
6. Proceed to select values for the input nodes, specifically X1 and X2. Confirm your selections by clicking the **SUBMIT** button.
7. Identify the Zᵢ cell corresponding to the current row and input the appropriate Zᵢ value.
8. Click the **ACTIVATION FUNCTION** button.
9. Confirm result accuracy by clicking the **CHECK** button to compare target (X₁.X₂') and output values (f(Zᵢ)).
10. If X₁.X₂' does not match f(Zᵢ), follow these steps. Else, jump to step 10:
    <ol type="a">
    <li>Click the <b>UPDATE</b> button to adjust weights.</li>
    <li>Enter the learning rate value.</li>
    <li>Provide necessary values in the input boxes for W11 and click <b>SUBMIT</b> button.</li>
    <li>Repeat the above step (9.3) for W12.</li>
    </ol>

11. Repeat steps 5 through 9 for all four combinations of X1 and X2 .
12. Proceed by clicking the **NEXT** button to execute epochs until the predicted output is obtained for each input dataset.
13. Lastly, proceed to the **ANALYZE** tab and select it. Generate the graph by clicking the **PLOT** button.

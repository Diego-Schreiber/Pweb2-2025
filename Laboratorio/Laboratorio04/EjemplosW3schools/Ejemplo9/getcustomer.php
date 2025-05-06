<?php
$customers = array(
    "ALFKI" => array("Alfreds Futterkiste", "Maria Anders", "Germany"),
    "NORTS" => array("North/South", "Simon Crowther", "UK"),
    "WOLZA" => array("Wolski Zajazd", "Zbyszek Piestrzeniewicz", "Poland")
);

$q = $_GET["q"] ?? "";

if (array_key_exists(trim($q), $customers)) {
    $c = $customers[trim($q)];
    echo "<table border='1'>
            <tr><th>Company</th><td>{$c[0]}</td></tr>
            <tr><th>Contact</th><td>{$c[1]}</td></tr>
            <tr><th>Country</th><td>{$c[2]}</td></tr>
          </table>";
} else {
    echo "No customer found.";
}
?>

function segundoGrau() {
  try {
    s = document.getElementById("input_a").value.toString();
    a = parseFloat(s);
    s = document.getElementById("input_b").value.toString();
    b = parseFloat(s);
    s = document.getElementById("input_c").value.toString();
    c = parseFloat(s);

    discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
      x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      r = `AS RAÍZES SÃO X1 = ${x1} E X2 = ${x2}`;
      document.getElementById("input_result").value = r;
    } else if (discriminante === 0) {
      x = -b / (2 * a);
      r = `AS RAÍZES SÃO IDENTICAS: X = ${x}`;
      document.getElementById("input_result").value = r;
    } else {
      r = `NÃO EXISTE RAÍZES REAIS (RAÍZES COMPLEXAS)`;
      document.getElementById("input_result").value = r;
    }
  } catch (erro) {
    alert(erro);
  }
}

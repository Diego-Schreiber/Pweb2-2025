<%
Dim a, q, i, hint
a = Array("Ana", "Beto", "Carlos", "Diana", "Elena", "Fernando")

q = Request.QueryString("q")
hint = ""

If q <> "" Then
    For i = 0 To UBound(a)
        If LCase(Left(a(i), Len(q))) = LCase(q) Then
            If hint = "" Then
                hint = a(i)
            Else
                hint = hint & ", " & a(i)
            End If
        End If
    Next
End If

If hint = "" Then
    Response.Write("sin sugerencias")
Else
    Response.Write(hint)
End If
%>

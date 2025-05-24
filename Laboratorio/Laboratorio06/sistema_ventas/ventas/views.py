from django.shortcuts import render, redirect
from django.forms import modelformset_factory
from .forms import DetalleVentaForm
from .models import Venta, DetalleVenta

def crear_venta(request):
    DetalleVentaFormSet = modelformset_factory(DetalleVenta, form=DetalleVentaForm, extra=3)

    if request.method == 'POST':
        formset = DetalleVentaFormSet(request.POST)
        if formset.is_valid():
            venta = Venta.objects.create()
            for form in formset:
                if form.cleaned_data:
                    detalle = form.save(commit=False)
                    detalle.venta = venta
                    detalle.save()
            return redirect('ventas:venta_exitosa')
    else:
        formset = DetalleVentaFormSet(queryset=DetalleVenta.objects.none())
    
    return render(request, 'ventas/crear_venta.html', {'formset': formset})


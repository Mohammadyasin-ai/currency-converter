                toResultEl.textContent = `${currencies[toCurrency].symbol}${convertedAmount.toFixed(2)} ${toCurrency} ${currencies[toCurrency].flag}`;
                rateEl.textContent = `1 ${fromCurrency} = ${(toRate / fromRate).toFixed(6)} ${toCurrency}`;
                
                resultEl.classList.remove('hidden');
            }
            
            // Swap currencies
            function swapCurrencies() {
                const temp = fromEl.value;
                fromEl.value = toEl.value;
                toEl.value = temp;
                convert();
            }
            
            // Update last updated time
            function updateLastUpdated() {
                if (lastUpdated) {
                    lastUpdatedEl.textContent = `Last updated: ${lastUpdated.toLocaleString()}`;
                } else {
                    lastUpdatedEl.textContent = '';
                }
            }
            
            // Initialize the app
            init();
        });
    </script>
def find_it(seq):
    
    sum = 0
    seq.sort()
    print(seq)
    
    for i in range(0, len(seq)):
        sum = seq[i] + seq[i+1]
            
            
        
            


find_it([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])

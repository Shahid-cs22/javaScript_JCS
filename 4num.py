import numpy as np
arr=np.array([1,2,3])
for x in arr:
    print(x)


import numpy as np
arr=np.array([[1,2,3],[4,5,6]])
for x in arr:
    for y in x:
        print(y) 




import numpy as np
arr1=np.array([1,2,3])
arr2=np.array([4,5,6])
arr=np.concatenate((arr1,arr2))
print(arr)

import numpy as np
arr1=np.array([[1,2],[3,4],[10,11]])
arr2=np.array([[5,6],[7,8],[12,13]])
arr=np.concatenate((arr1,arr2))
arr=np.concatenate((arr1,arr2),axis=1)
print(arr)


import numpy as np
arr1=np.array([1,2,3])
arr2=np.array([4,5,6])
arr=np.stack((arr1,arr2))
arr=np.stack((arr1,arr2),axis=1)
print(arr)

import numpy as np
arr1=np.array([1,2,3])
arr2=np.array([4,5,6])
arr=np.vstack((arr1,arr2))
print(arr)